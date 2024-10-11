import { Component } from '@angular/core';

@Component({
  selector: 'app-calfood',
  templateUrl: './calfood.component.html',
  styleUrls: ['./calfood.component.scss'],
})
export class CalfoodComponent {
  gender: string | null = null;
  age: number | null = null;
  height: number | null = null;
  weight: number | null = null;
  activityFactor: number = 1.25;
  bmr: number | null = null;
  tdee: number | null = null;

  protein: number = 0;
  fat: number = 0;
  carb: number = 0;
  proteinCal: number = 0;
  fatCal: number = 0;
  carbCal: number = 0;
  proteinPercent: number = 0;
  fatPercent: number = 0;
  carbPercent: number = 0;
  totalCalories: number = 0;
  showNutritionTable: boolean = false;

  objective: number | null = null;

  public ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  CalcDCI() {
    if (
      !this.gender ||
      !this.age ||
      !this.height ||
      !this.weight ||
      !this.objective
    ) {
      return;
    }

    let weightInKg = this.weight;
    let heightInCm = this.height;
    let age = this.age;

    // BMR calculation for males and females
    if (this.gender === 'male') {
      this.bmr = 66 + 13.7 * weightInKg + 5 * heightInCm - 6.8 * age;
    } else if (this.gender === 'female') {
      this.bmr = 655 + 9.6 * weightInKg + 1.8 * heightInCm - 4.7 * age;
    }

    // Ensure BMR is not null before calculating TDEE
    if (this.bmr !== null) {
      this.tdee = this.bmr * this.activityFactor;
      this.calculateMacronutrients();
    }

    this.showNutritionTable = true;
  }

  calculateMacronutrients() {
    if (this.tdee === null || this.weight === null || this.objective === null)
      return;

    let protein = 0;
    let fat = 0;
    let carb = 0;
    let proteinCal = 0;
    let fatCal = 0;
    let carbCal = 0;

    // Calculate macronutrients based on the selected objective
    if (this.objective == 1) {
      // Muscle Gain
      protein = this.weight * 2.4;
      proteinCal = protein * 4;
      fat = this.weight * 1;
      fatCal = fat * 9;
    } else if (this.objective == 2) {
      // Fat Loss
      protein = this.weight * 3;
      proteinCal = protein * 4;
      fat = this.weight * 1.2;
      fatCal = fat * 9;
    } else if (this.objective == 3) {
      // Maintain Muscle
      protein = this.weight * 2.7;
      proteinCal = protein * 4;
      fat = this.weight * 1;
      fatCal = fat * 9;
    }

    carb = (this.tdee - (proteinCal + fatCal)) / 4;
    carbCal = this.tdee - (proteinCal + fatCal);

    // Calculate percentages
    const totalCal = proteinCal + fatCal + carbCal;
    this.proteinPercent = (proteinCal / totalCal) * 100;
    this.fatPercent = (fatCal / totalCal) * 100;
    this.carbPercent = (carbCal / totalCal) * 100;
    this.totalCalories = totalCal;

    // Update variables for display
    this.protein = protein;
    this.proteinCal = proteinCal;
    this.fat = fat;
    this.fatCal = fatCal;
    this.carb = carb;
    this.carbCal = carbCal;
  }
}
