import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Goal {
  name: string;
}

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss'
})
export class TrainerComponent {
  public name!: string;
  public form!: FormGroup;
  public visibleModal = false;

  goals: Goal[] | undefined;
  selectedGoal: Goal | undefined;

    ngOnInit() {
        this.goals = [
            { name: 'มีรูปร่างที่ดี' },
            { name: 'ความยืดหยุ่น'},
            { name: 'รักษากล้ามเนื้อ'},
            { name: 'การลดไขมัน'},
            { name: 'เพิ่มกล้ามเนื้อ'}
        ];
    }
}
