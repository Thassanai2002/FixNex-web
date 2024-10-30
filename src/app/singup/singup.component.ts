import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SingUpService } from '../singup/service/sing-up.service';
import { Router } from '@angular/router';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.scss',
})
export class SingupComponent {
  public signUp!: FormGroup;
  visible: boolean = false;
  confirmSubscription: boolean = false;
  Incomplete_information: boolean = false;
  username_already: boolean = false;
  successful: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private SingUpService: SingUpService,
    private router: Router
  ) {
    window.scrollTo(0, 0);
  }

  public ngOnInit(): void {
    this.signUp = this.formBuilder.group({
      user_name: [{ value: null, disabled: false }, Validators.required],
      phone: [{ value: null, disabled: false }, Validators.required],
      email: [
        { value: null, disabled: false },
        [Validators.required, Validators.email],
      ],
      password: [{ value: null, disabled: false }, Validators.required],
      vip_level: [{ value: null, disabled: false }],
      join_date: [{ value: null, disabled: false }],
    });
  }

  checkData() {
    this.signUp.value.join_date = new Date();
    this.signUp.value.vip_level = 0;
    if(this.signUp.valid){
      this.confirmSubscription = true;
    }else{
      this.Incomplete_information = true;
    }
  }

  saveUser() {
    this.confirmSubscription = false;
    if (this.signUp.valid) {
      console.log('กรอกข้อมูลครบ');
      this.SingUpService.saveUser(this.signUp.value).subscribe(
        (data) => {
          this.successful = true;
          console.log('สมัครสมาชิกสําเร็จ');
          this.signUp.reset();
        },
        (error) => {
          console.log(error.error.message);
          this.username_already = true;
        }
      );
    }
  }

  // saveSignup(): void {
  //   this.signUp.value.join_date = new Date();
  //   this.signUp.value.vip_level = 0;
  //   console.log(this.signUp.value);
  //   if (this.signUp.valid) {
  //     console.log('กรอกข้อมูลครบ');
  //     this.SingUpService.saveUser(this.signUp.value).subscribe(
  //       (data) => {
  //         console.log('สมัครสมาชิกสําเร็จ');
  //         this.signUp.reset();
  //       },
  //       (error) => {
  //         console.log(error.error.message);
  //       }
  //     );
  //   } else {
  //     console.log('กรุณากรอกข้อมูลให้ครบ');
  //   }
  // }

  gologin() {
    this.router.navigate(['/login']);
  }
}
