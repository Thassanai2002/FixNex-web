import { Component } from '@angular/core';
import { StateDataInterface } from '../shared/interfaces/interfaceAll';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursetrainService } from './service/coursetrain.service';
import { programsEnrollments } from './interface/coursetrain';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-coursetrain',
  templateUrl: './coursetrain.component.html',
  styleUrl: './coursetrain.component.scss',
})
export class CoursetrainComponent {
  public visibleModal = false;
  state = {} as StateDataInterface<any>;
  progarm_data: any;
  Enrollments: any;
  confirmSubscription: boolean = false;
  Incomplete_information: boolean = false;
  successful: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private CoursetrainService: CoursetrainService,
    private formBuilder: FormBuilder,
  ) {
    window.scrollTo(0, 0);
    this.route.queryParams.forEach(() => {
      this.state =
        (this.router.getCurrentNavigation()?.extras
          ?.state as StateDataInterface<any>) ||
        ({} as StateDataInterface<any>);
    });
  }

  ngOnInit() {
    console.log(this.state);
    this.CoursetrainService.getProgram(this.state.data).subscribe((data) => {
      if (data) {
        this.progarm_data = data;
        console.log(this.progarm_data);
      }
    });
    this.Enrollments = this.formBuilder.group({
      user_id: [{ value: null, disabled: false }, Validators.required],
      program_id: [{ value: null, disabled: false }, Validators.required],
      enrollment_date: [{ value: null, disabled: false }, [Validators.required]],
    });
  }

  saveProgramToEnrollment() {
    this.confirmSubscription = false
    this.Enrollments.value.user_id = this.state.user;
    this.Enrollments.value.program_id = this.progarm_data.program_id;
    this.Enrollments.value.enrollment_date = this.progarm_data.day;
    console.log(this.Enrollments.value);
    this.CoursetrainService.saveProgramToEnrollment(this.Enrollments.value).subscribe(
      (data) => {
        console.log(data);
        this.successful = true
      }
    );
  }

}
