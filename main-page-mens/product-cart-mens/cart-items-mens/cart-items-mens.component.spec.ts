import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemsMensComponent } from './cart-items-mens.component';

describe('CartItemsMensComponent', () => {
  let component: CartItemsMensComponent;
  let fixture: ComponentFixture<CartItemsMensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemsMensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemsMensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
