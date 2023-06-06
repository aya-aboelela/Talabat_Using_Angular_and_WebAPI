import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetaurantDetailsComponent } from './retaurant-details.component';

describe('RetaurantDetailsComponent', () => {
  let component: RetaurantDetailsComponent;
  let fixture: ComponentFixture<RetaurantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetaurantDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetaurantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
