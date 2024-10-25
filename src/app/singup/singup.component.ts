import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SingUpService } from '../singup/service/sing-up.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.scss',
})
export class SingupComponent {
  public signUp!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private SingUpService: SingUpService
  ) {}

  public ngOnInit(): void {
    this.signUp = this.formBuilder.group({
      user_name: [{ value: null, disabled: false }],
      phone: [{ value: null, disabled: false }],
      email: [{ value: null, disabled: false }],
      password: [{ value: null, disabled: false }],
      vip_level: [{ value: 0, disabled: false }],
      join_date: [{ value: new Date(), disabled: false }],
    });
  }

  // saveSignup(): void {
  //   this.SingUpService.saveUser(this.signUp.value).subscribe((data) => {});
  // }

  saveSignup(): void {
    this.SingUpService.saveUser(this.signUp.value).subscribe(
      (data) => {
        console.log('User registered successfully!');
        this.signUp.reset();
      },
      (error) => {
        console.log(error.message); // แสดงข้อความข้อผิดพลาดที่ backend ส่งมา
      }
    );
  }

}
