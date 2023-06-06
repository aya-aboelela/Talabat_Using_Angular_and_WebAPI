import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantLoginFormComponent } from './resturant-login-form.component';

describe('ResturantLoginFormComponent', () => {
  let component: ResturantLoginFormComponent;
  let fixture: ComponentFixture<ResturantLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
