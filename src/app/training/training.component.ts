import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StateDataInterface } from '../shared/interfaces/interfaceAll';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
})
export class TrainingComponent {
  public form!: FormGroup;
  public visibleModal = false;
  state = {} as StateDataInterface<any>;
  user_id = 2;
  เพิ่มกล้ามเนื้อ = "เพิ่มกล้ามเนื้อ";
  public constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    window.scrollTo(0, 0);
    this.form = this.formBuilder.group({
      bodypump: [{ value: null, disabled: false }, [Validators.required]],
    });
    this.route.queryParams.forEach(() => {
      this.state =
        (this.router.getCurrentNavigation()?.extras
          ?.state as StateDataInterface<any>) ||
        ({} as StateDataInterface<any>);
    });
  }

  images: string[] = [
    'assets/JPG/run.jpg',
    'assets/JPG/dumbell.jpg',
    'assets/JPG/yoga.jpg',
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  goCoursetrainer(): void {
    this.router.navigate(['/coursetrain']);
  }

  goTotrainer(): void {
    this.state.user = this.user_id; // เก็บข้อมูลผู้ใช้
    this.router.navigate(['/trainer'], { state: this.state });
  }

  goPageCoursetrain(header: any, program_id: number) {
    this.state.user = this.user_id; // เก็บข้อมูลผู้ใช้
    this.state.header = header; // เก็บ orderItems
    this.state.data = program_id; // เก็บ orderItems

    console.log(this.state);

    this.router.navigate(['/coursetrain'], { state: this.state }); // ส่ง state ในการนำทาง
  }

}
