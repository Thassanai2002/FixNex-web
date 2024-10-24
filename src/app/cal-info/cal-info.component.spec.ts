import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalInfoComponent } from './cal-info.component';

describe('CalInfoComponent', () => {
  let component: CalInfoComponent;
  let fixture: ComponentFixture<CalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
