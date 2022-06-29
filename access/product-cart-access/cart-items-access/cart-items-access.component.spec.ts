import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsAccessComponent } from './cart-items-access.component';

describe('CartItemsAccessComponent', () => {
  let component: CartItemsAccessComponent;
  let fixture: ComponentFixture<CartItemsAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemsAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
