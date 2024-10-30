import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {

  public form!: FormGroup;
  public visibleModal = false;

  public constructor(
    private formBuilder: FormBuilder,private router: Router
  ) {
    window.scrollTo(0, 0);
    this.form = this.formBuilder.group({
        bodypump: [{ value: null, disabled: false }, [Validators.required]]
    });

  }

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

  goCoursetrainer(): void {
    this.router.navigate(['/coursetrain']);
  }

  goTotrainer(): void {
    this.router.navigate(['/trainer']);
  }
}
