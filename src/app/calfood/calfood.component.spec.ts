import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalfoodComponent } from './calfood.component';

describe('CalfoodComponent', () => {
  let component: CalfoodComponent;
  let fixture: ComponentFixture<CalfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalfoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
