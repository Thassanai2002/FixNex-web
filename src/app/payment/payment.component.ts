import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PaymaentService } from './service/paymaent.service';
import { Order, OrderItem, UserSpending } from './interface/payment';
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
      price: [
        { value: this.total, disabled: false },
        Validators.required,
      ],
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
    this.confirmSubscription = false
    try {
      const orderData = await this.saveOrder(this.Order.value);
      if (!orderData) {
        throw new Error('ไม่สามารถสร้างคำสั่งซื้อได้');
      }
      this.Id_order = orderData.order_id;

      this.OrderItem.patchValue({ order_id: this.Id_order });
      await this.saveOrderItem(this.OrderItem.value);
      await this.saveUserSpending(this.UserSpending.value);

      // Show success dialog
      this.successful = true;
    } catch (error) {
      console.error('เกิดข้อผิดพลาดระหว่างกระบวนการชำระเงิน:', error);
    }
  }


  private saveOrder(order: Order): Promise<Order> {
    return this.paymaentService.saveOrder(order).toPromise().then((result) => {
      if (!result) {
        throw new Error('ไม่สามารถสร้างคำสั่งซื้อได้');
      }
      return result;
    });
  }

  private saveOrderItem(orderItem: OrderItem): Promise<OrderItem> {
    return this.paymaentService.saveOrderItem(orderItem).toPromise().then((result) => {
      if (!result) {
        throw new Error('ไม่สามารถบันทึก OrderItem ได้');
      }
      return result;
    });
  }

  private saveUserSpending(userSpending: UserSpending): Promise<UserSpending> {
    return this.paymaentService.saveUserSpending(userSpending).toPromise().then((result) => {
      if (!result) {
        throw new Error('ไม่สามารถบันทึก UserSpending ได้');
      }
      return result;
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
