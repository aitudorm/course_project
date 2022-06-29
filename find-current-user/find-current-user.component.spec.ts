import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCurrentUserComponent } from './find-current-user.component';

describe('FindCurrentUserComponent', () => {
  let component: FindCurrentUserComponent;
  let fixture: ComponentFixture<FindCurrentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindCurrentUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCurrentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
