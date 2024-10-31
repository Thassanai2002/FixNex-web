import { Component } from '@angular/core';
import { Profile } from './interface/profile';
import { ProfileService } from './service/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainerRantals } from './interface/TrainerRantals';
import { StateDataInterface } from '../shared/interfaces/interfaceAll';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  public name!: string;
  // user_id!: number;
  user_name!: string;
  email!: string;
  password!: string;
  phone!: string;
  vip_level!: string;
  join_date!: Date;
  form!: FormGroup;
  TrainerRantals!: TrainerRantals;
  user: any;
  rentals: any;
  trainer_id!: number;
  rental_date!: string;
  duration!: number;
  rental: any;
  trainer_name!: string;
  picture!: any;
  enrollments!: any;
  orders!: any;
  state = {} as StateDataInterface<any>;

  constructor(
    private ProfileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.queryParams.forEach(() => {
      this.state =
        (this.router.getCurrentNavigation()?.extras
          ?.state as StateDataInterface<any>) ||
        ({} as StateDataInterface<any>);
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);

    let user_id = 2;

    this.ProfileService.getProfile(user_id).subscribe((data) => {
      this.user = data.user;
      this.rentals = data.rentals; // เก็บข้อมูล rentals เป็นอาร์เรย์
      this.enrollments = data.enrollments; // เก็บข้อมูล enrollments เป็นอาร์เรย์
      this.orders = data.orders;
      console.log(data); // ตรวจสอบข้อมูลที่ได้จาก API

      if (data) {
        this.user_name = data.user.user_name;
        this.email = data.user.email;
        this.phone = data.user.phone;
        this.vip_level = data.user.vip_level;
      }
    });
  }

  goPageOrder(orderItems: any) {
    this.state.user = this.user; // เก็บข้อมูลผู้ใช้
    this.state.data = orderItems; // เก็บ orderItems

    console.log(this.state);

    this.router.navigate(['/oderItem'], { state: this.state }); // ส่ง state ในการนำทาง
  }

  getImagePath(trainerId: number): string {
    switch (trainerId) {
      case 1:
        return '/assets/PNG/napat.jpg'; // รูปสำหรับ trainer_id = 1
      case 2:
        return '/assets/PNG/jack.jpg'; // รูปสำหรับ trainer_id = 2
      case 3:
        return '/assets/PNG/Tamazon.jpg'; // รูปสำหรับ trainer_id = 3
      case 4:
        return '/assets/PNG/kit.jpg'; // รูปสำหรับ trainer_id = 3
      default:
        return '/assets/PNG/Boss.jpg'; // รูปสำหรับ trainer_id อื่น ๆ
    }
  }

  getImageOrder(productId: number): string {
    return '/assets/PNG/FoodInfo1.png';
    // switch (trainerId) {
    //   case 1:
    //     return '/assets/PNG/napat.jpg'; // รูปสำหรับ trainer_id = 1
    //   case 2:
    //     return '/assets/PNG/jack.jpg'; // รูปสำหรับ trainer_id = 2
    //   case 3:
    //     return '/assets/PNG/Tamazon.jpg'; // รูปสำหรับ trainer_id = 3
    //   case 4:
    //     return '/assets/PNG/kit.jpg'; // รูปสำหรับ trainer_id = 3
    //   default:
    //     return '/assets/PNG/Boss.jpg'; // รูปสำหรับ trainer_id อื่น ๆ
    // }
  }
}
