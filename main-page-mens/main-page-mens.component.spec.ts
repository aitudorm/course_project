import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMensComponent } from './main-page-mens.component';

describe('MainPageMensComponent', () => {
  let component: MainPageMensComponent;
  let fixture: ComponentFixture<MainPageMensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageMensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageMensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
