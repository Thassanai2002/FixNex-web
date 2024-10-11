import { Component } from '@angular/core';
import { Profile } from './interface/profile';
import { ProfileService } from './service/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      console.log(data);
      if (data) {
        this.user_name = data.user_name;
        this.email = data.email;
        this.phone = data.phone;
        this.vip_level = data.vip_level;
        this.join_date = data.join_date;
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
}
