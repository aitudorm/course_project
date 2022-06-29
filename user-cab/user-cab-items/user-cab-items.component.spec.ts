import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCabItemsComponent } from './user-cab-items.component';

describe('UserCabItemsComponent', () => {
  let component: UserCabItemsComponent;
  let fixture: ComponentFixture<UserCabItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCabItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCabItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
