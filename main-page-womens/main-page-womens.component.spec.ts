import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageWomensComponent } from './main-page-womens.component';

describe('MainPageWomensComponent', () => {
  let component: MainPageWomensComponent;
  let fixture: ComponentFixture<MainPageWomensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageWomensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageWomensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
