import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursetrainComponent } from './coursetrain.component';

describe('CoursetrainComponent', () => {
  let component: CoursetrainComponent;
  let fixture: ComponentFixture<CoursetrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursetrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursetrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
