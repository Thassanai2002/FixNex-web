import { HemoService } from './../home/service/hemo.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public signIn!: FormGroup;

  constructor(private formBuilder: FormBuilder
    ,private HemoService: HemoService
  ) {}

  public ngOnInit(): void {
    this.signIn = this.formBuilder.group({
      user_name: [{ value: null, disabled: false }],
      email: [{ value: null, disabled: false }],
      password: [{ value: null, disabled: false }],
      phone: [{ value: null, disabled: false }],
      vip_level: [{ value: '1', disabled: false }],
      join_date: [{ value: new Date(), disabled: false }],
    });
  }

  // save(){
  //   this.HemoService.save(this.signIn.value)
  // }

  public save(): void {

    this.HemoService.save(this.signIn.value).subscribe((data) => {
      console.log(data);

    })
  }

}
