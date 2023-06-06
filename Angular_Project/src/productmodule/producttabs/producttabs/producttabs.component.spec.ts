import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttabsComponent } from './producttabs.component';

describe('ProducttabsComponent', () => {
  let component: ProducttabsComponent;
  let fixture: ComponentFixture<ProducttabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducttabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
