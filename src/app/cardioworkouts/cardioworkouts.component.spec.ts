import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioworkoutsComponent } from './cardioworkouts.component';

describe('CardioworkoutsComponent', () => {
  let component: CardioworkoutsComponent;
  let fixture: ComponentFixture<CardioworkoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardioworkoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardioworkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
