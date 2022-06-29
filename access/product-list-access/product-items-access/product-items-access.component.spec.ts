import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemsAccessComponent } from './product-items-access.component';

describe('ProductItemsAccessComponent', () => {
  let component: ProductItemsAccessComponent;
  let fixture: ComponentFixture<ProductItemsAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemsAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemsAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
