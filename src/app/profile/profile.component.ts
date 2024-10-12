import { Component } from '@angular/core';
import { Profile } from './interface/profile';
import { ProfileService } from './service/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainerRantals } from './interface/TrainerRantals';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
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
  // trainer_name!: string;
  // trainer_name!: string;

  constructor(
    private ProfileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);

    let user_id = 2;

    this.ProfileService.getProfile(user_id).subscribe((data) => {
      this.user = data.user;
      this.rentals = data.rentals; // เก็บข้อมูล rentals เป็นอาร์เรย์
      console.log(data); // ตรวจสอบข้อมูลที่ได้จาก API

      if (data) {
        // data.user
        this.user_name = data.user.user_name;
        this.email = data.user.email;
        this.phone = data.user.phone;
        this.vip_level = data.user.vip_level;

        // แสดงข้อมูลการเช่า
        if (this.rentals.length > 0) {
          this.rentals.forEach((rental: TrainerRantals) => {

            this.trainer_name = rental.trainer.trainer_name;
            console.log('Trainer Name:', rental.trainer.trainer_name); // แสดง trainer_name
            console.log('Duration:', rental.duration); // แสดง duration
            console.log('Trainer ID:', rental.trainer_id); // แสดง trainer_id
          });
        } else {
          console.log('No rentals available'); // แสดงเมื่อไม่มีการเช่า
        }
      }
    });

    // this.form = this.formBuilder.group({
    //   user_name: [{ value: null, disabled: false }],
    //   email: [{ value: null, disabled: false }],
    //   password: [{ value: null, disabled: false }],
    //   phone: [{ value: null, disabled: false }],
    //   vip_level: [{ value: '1', disabled: false }],
    //   join_date: [{ value: new Date(), disabled: false }],
    // });
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
}
