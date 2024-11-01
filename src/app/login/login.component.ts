import { HemoService } from './../home/service/hemo.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from './service/signin.service';
import { AuthService } from '../shared/user_id/id-user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public signIn!: FormGroup;
  Incomplete_information: boolean = false;
  notUsernameindatabase: boolean = false;
  password_notincorrect: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private router: Router,
    private authService: AuthService
  ) {
    window.scrollTo(0, 0);
  }

  public ngOnInit(): void {
    this.signIn = this.formBuilder.group({
      user_name: [{ value: null, disabled: false }],
      password: [{ value: null, disabled: false }],
    });
  }

  public chackLogin(): void {
    const { user_name, password } = this.signIn.value;

    if (!user_name || !password) {
      this.Incomplete_information = true;
    } else {
      this.signinService.chackUser(user_name).subscribe((data) => {
        console.log(data);
        if (data) {
          console.log('มี Username นี้ในระบบ');
          if (data.password === password) {
            console.log('เข้าสู่ระบบสำเร็จ');
            this.authService.setUserId(data.user_id);
            this.router.navigate(['/home']);
          } else {
            console.log('Password ไม่ถูกต้อง');
            this.password_notincorrect = true;
          }
        } else {
          console.log('ไม่มี Username นี้ในระบบ');
          this.notUsernameindatabase = true;
        }
      });
    }
  }

  goSignup() {
    this.router.navigate(['/singup']);
  }
}
