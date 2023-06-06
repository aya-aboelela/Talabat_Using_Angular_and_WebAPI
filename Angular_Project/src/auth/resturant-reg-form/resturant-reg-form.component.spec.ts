import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantRegFormComponent } from './resturant-reg-form.component';

describe('ResturantRegFormComponent', () => {
  let component: ResturantRegFormComponent;
  let fixture: ComponentFixture<ResturantRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantRegFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
