import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListAccessComponent } from './product-list-access.component';

describe('ProductListAccessComponent', () => {
  let component: ProductListAccessComponent;
  let fixture: ComponentFixture<ProductListAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
