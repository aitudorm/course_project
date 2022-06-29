import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolomidComponent } from './solomid.component';

describe('SolomidComponent', () => {
  let component: SolomidComponent;
  let fixture: ComponentFixture<SolomidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolomidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolomidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
