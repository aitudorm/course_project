import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListMensComponent } from './product-list-mens.component';

describe('ProductListMensComponent', () => {
  let component: ProductListMensComponent;
  let fixture: ComponentFixture<ProductListMensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListMensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListMensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
