import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegFormComponent } from './customer-reg-form.component';

describe('CustomerRegFormComponent', () => {
  let component: CustomerRegFormComponent;
  let fixture: ComponentFixture<CustomerRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRegFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
