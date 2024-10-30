import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrl: './trainer.component.scss'
})
export class TrainerComponent {
  public form!: FormGroup;
  public visibleModal = false;

  public constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
        bodypump: [{ value: null, disabled: false }, [Validators.required]]
    });

  }

}
