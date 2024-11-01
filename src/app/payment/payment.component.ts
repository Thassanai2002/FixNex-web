import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PaymaentService } from './service/paymaent.service';
import { Order, OrderItem, User, UserSpending } from './interface/payment';
import { StateDataInterface } from '../shared/interfaces/interfaceAll';
import { AuthService } from '../shared/user_id/id-user.service';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload!: FileUpload; // Access to p-fileUpload
  public name!: string;
  state = {} as StateDataInterface<any>;
  total!: number;
  public Order!: FormGroup;
  public OrderItem!: FormGroup;
  public UserSpending!: FormGroup;
  user_id!: number;
  Id_order!: number;
  Incomplete_information: boolean = false;
  successful: boolean = false;
  confirmSubscription: boolean = false;
  user!: User;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private paymaentService: PaymaentService,
    private messageService: MessageService,
    private authService: AuthService
  ) {
    const userId = this.authService.getUserId();
    this.authService.setUserId(userId!);
    this.user_id = userId!;

    this.route.queryParams.forEach(() => {
      this.state =
        (this.router.getCurrentNavigation()?.extras
          ?.state as StateDataInterface<any>) ||
        ({} as StateDataInterface<any>);
    });
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.paymaentService.getUser(this.user_id).subscribe((data) => {
      this.user = data;
    })

    this.total = this.state.data.quantity * this.state.data.unit_price;

    this.Order = this.formBuilder.group({
      user_id: [{ value: this.user_id, disabled: false }, Validators.required],
      oder_date: [{ value: new Date(), disabled: false }, Validators.required],
      total_amount: [
        { value: this.total, disabled: false },
        [Validators.required],
      ],
      status: [{ value: 'เสร็จสื้น', disabled: false }, Validators.required],
    });

    this.OrderItem = this.formBuilder.group({
      order_id: [
        { value: this.Id_order, disabled: false },
        Validators.required,
      ],
      product_id: [
        { value: this.state.data.product_id, disabled: false },
        Validators.required,
      ],
      quantity: [
        { value: this.state.data.quantity, disabled: false },
        Validators.required,
      ],
      price: [{ value: this.total, disabled: false }, Validators.required],
    });

    this.UserSpending = this.formBuilder.group({
      user_id: [{ value: this.user_id, disabled: false }, Validators.required],
      total_spending: [
        { value: this.total, disabled: false },
        Validators.required,
      ],
      last_purchas_date: [
        { value: new Date(), disabled: false },
        Validators.required,
      ],
    });
  }

  public async Payment(fileUpload: FileUpload) {
    // Check if any file is uploaded
    if (!fileUpload.files || fileUpload.files.length === 0) {
      console.log('กรุณาแนบไฟล์ก่อน');
      this.Incomplete_information = true;
      return;
    }

    // Show confirmation dialog
    this.confirmSubscription = true;
  }

  // Function to execute when user confirms the subscription
  public async saveOrderData() {
    this.confirmSubscription = false;
    try {
      const orderData = await this.saveOrder(this.Order.value);
      if (!orderData) {
        throw new Error('ไม่สามารถสร้างคำสั่งซื้อได้');
      }
      this.Id_order = orderData.order_id;

      this.OrderItem.patchValue({ order_id: this.Id_order });
      await this.saveOrderItem(this.OrderItem.value);
      await this.saveUserSpending();

      // Show success dialog
      this.successful = true;
    } catch (error) {
      console.error('เกิดข้อผิดพลาดระหว่างกระบวนการชำระเงิน:', error);
    }
  }

  private saveOrder(order: Order): Promise<Order> {
    return this.paymaentService
      .saveOrder(order)
      .toPromise()
      .then((result) => {
        if (!result) {
          throw new Error('ไม่สามารถสร้างคำสั่งซื้อได้');
        }
        return result;
      });
  }

  private saveOrderItem(orderItem: OrderItem): Promise<OrderItem> {
    return this.paymaentService
      .saveOrderItem(orderItem)
      .toPromise()
      .then((result) => {
        if (!result) {
          throw new Error('ไม่สามารถบันทึก OrderItem ได้');
        }
        return result;
      });
  }

  private saveUserSpending() {
    this.paymaentService.getUserSpending(this.user_id).subscribe((result) => {
      if (!result) {
        this.paymaentService
          .postUserSpending(this.UserSpending.value)
          .subscribe((data) => {
            console.log('data:postUserSpending :', data);
          });
      } else {
        result.total_spending += this.total;
        result.last_purchas_date = new Date();
        console.log(
          'result.total_spending += this.total :',
          result.total_spending
        );
        this.paymaentService
          .patchUserSpending(result.spending_id, result)
          .subscribe((data) => {
            console.log('data:patchUserSpending :', data);
            if(data.total_spending) {
              console.log(data.total_spending);
              this.patchVIPuser(data.total_spending);
            } else {
              console.log('data ไม่ เข้า if');
            }
          });
      }
    });
  }


  public patchVIPuser(totalSpending: number) {
    console.log('totalSpending :', totalSpending);
    let vip_level = '0';
    if (totalSpending >= 40000) {
      vip_level = '4';
    } else if (totalSpending >= 30000) {
      vip_level = '3';
    } else if (totalSpending >= 20000) {
      vip_level = '2';
    } else if (totalSpending >= 10000) {
      vip_level = '1';
    } else {
      vip_level = '0';
    }
    this.user.vip_level = vip_level;
    console.log('user :', this.user);
    this.paymaentService
      .patchUserVip(this.user_id, this.user) // ส่งค่า vip_level ในรูปแบบ string
      .subscribe((data) => {
        console.log('data:patchUserVip :', data);
      });
  }

  public gohome(): void {
    this.router.navigate(['/home']);
  }

  onUpload() {
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  }

  public gocalfood(): void {
    this.router.navigate(['/calfood']);
  }
}
