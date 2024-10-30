import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Goal {
  name: string;
  code: string;
}

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss'
})
export class TrainerComponent {
  public form!: FormGroup;
  public visibleModal = false;

  goals: Goal[] | undefined;
  selectedGoal: Goal | undefined;

    ngOnInit() {
        this.goals = [
            { name: 'มีรูปร่างที่ดี', code: 'NY' },
            { name: 'ความยืดหยุ่น', code: 'RM' },
            { name: 'รักษากล้ามเนื้อ', code: 'LDN' },
            { name: 'การลดไขมัน', code: 'IST' },
            { name: 'เพิ่มกล้ามเนื้อ', code: 'PRS' }
        ];
    }
}
