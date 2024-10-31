import { Save } from './../home/interface/save';
import { Trainer } from './../profile/interface/TrainerRantals';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RantalsService } from './service/rantals.service';

interface Goal {
  name: string;
  code: number;
  day: string;
}

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss',
})
export class TrainerComponent {
  public form!: FormGroup;
  public visibleModal = false;
  confirmSubscription: boolean = false;
  Incomplete_information: boolean = false;
  successful: boolean = false;
  user_id = 2;
  Rantals: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private rantalsService: RantalsService
  ) {
    window.scrollTo(0, 0);
  }

  goals: Goal[] | undefined;
  selectedGoal: Goal | undefined;

  ngOnInit() {
    this.goals = [
      { name: 'รักษากล้ามเนื้อ', code: 1, day: 'จ. 18:00 - 20:00' },
      { name: 'การลดไขมัน', code: 2, day: 'อ. 18:00 - 20:00' },
      { name: 'เพิ่มกล้ามเนื้อ', code: 3, day: 'พ. 18:00 - 20:00' },
      { name: 'ความยืดหยุ่น', code: 4, day: 'พฤ. 18:00 - 20:00' },
      { name: 'มีรูปร่างที่ดี', code: 5, day: 'ศ. 18:00 - 20:00' },
    ];
    this.Rantals = this.formBuilder.group({
      user_id: [{ value: null, disabled: false }, Validators.required],
      trainer_id: [{ value: null, disabled: false }, Validators.required],
      rental_date: [{ value: null, disabled: false }, [Validators.required]],
      duration: [{ value: null, disabled: false }, Validators.required],
    });
  }

  chackCodeInDropdown() {
    if (this.selectedGoal?.code == undefined) {
      this.Incomplete_information = true;
    } else {
      // ยัดค่าลง Rantals
      this.Rantals.value.user_id = this.user_id;
      this.Rantals.value.trainer_id = this.selectedGoal.code;
      this.Rantals.value.rental_date = this.selectedGoal.day;
      this.Rantals.value.duration = 120;
      // ยัดค่าลง Rantals
      console.log(this.Rantals.value);
      this.confirmSubscription = true;
    }
  }

  saveRantals() {
    this.confirmSubscription = false;
    this.successful = true;
    this.rantalsService.saveRantals(this.Rantals.value).subscribe((data) => {
      console.log(data);
    });
    console.log('ยืนยัน');
  }
}
