import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {
  public name!: string;
  public form!: FormGroup;
  public visibleModal = false;

  images: string[] = [
    'assets/JPG/run.jpg',
    'assets/JPG/dumbell.jpg',
    'assets/JPG/yoga.jpg'
  ];
 
  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  public constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
        bodypump: [{ value: null, disabled: false }, [Validators.required]]
    });

  }

}