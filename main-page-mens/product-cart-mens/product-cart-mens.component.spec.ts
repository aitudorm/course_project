import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartMensComponent } from './product-cart-mens.component';

describe('ProductCartMensComponent', () => {
  let component: ProductCartMensComponent;
  let fixture: ComponentFixture<ProductCartMensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCartMensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartMensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
