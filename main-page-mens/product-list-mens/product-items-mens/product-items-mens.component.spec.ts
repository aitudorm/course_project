import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemsMensComponent } from './product-items-mens.component';

describe('ProductItemsMensComponent', () => {
  let component: ProductItemsMensComponent;
  let fixture: ComponentFixture<ProductItemsMensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemsMensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemsMensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
