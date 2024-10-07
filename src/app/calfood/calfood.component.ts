import { Component } from '@angular/core';

@Component({
  selector: 'app-calfood',
  templateUrl: './calfood.component.html',
  styleUrls: ['./calfood.component.scss']
})
export class CalfoodComponent {
  gender: string = '';
  age: number = 0;
  height: number = 0;
  weight: number = 0;
  activityFactor: number = 1.25;
  objective: number = 2;

  bmr: number | null = null;
  tdee: number | null = null;

  CalcDCI() {
    if (!this.gender || !this.age || !this.height || !this.weight) {
      return;
    }

    let weightInKg = this.weight;
    let heightInCm = this.height;
    let age = this.age;

    // BMR calculation for males and females
    if (this.gender === 'male') {
      this.bmr = 66 + (13.7 * weightInKg) + (5 * heightInCm) - (6.8 * age);
    } else if (this.gender === 'female') {
      this.bmr = 655 + (9.6 * weightInKg) + (1.8 * heightInCm) - (4.7 * age);
    }

    // Calculate TDEE
    this.tdee = this.bmr! * this.activityFactor;

  }
}
