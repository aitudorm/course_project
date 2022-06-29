import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCartAccessComponent } from './product-cart-access.component';

describe('ProductCartAccessComponent', () => {
  let component: ProductCartAccessComponent;
  let fixture: ComponentFixture<ProductCartAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCartAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCartAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
