import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrmbComponent } from './bread-crmb.component';

describe('BreadCrmbComponent', () => {
  let component: BreadCrmbComponent;
  let fixture: ComponentFixture<BreadCrmbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadCrmbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadCrmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
