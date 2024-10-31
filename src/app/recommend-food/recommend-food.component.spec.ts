import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendFoodComponent } from './recommend-food.component';

describe('RecommendFoodComponent', () => {
  let component: RecommendFoodComponent;
  let fixture: ComponentFixture<RecommendFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
