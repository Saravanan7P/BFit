import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymworkoutsComponent } from './gymworkouts.component';

describe('GymworkoutsComponent', () => {
  let component: GymworkoutsComponent;
  let fixture: ComponentFixture<GymworkoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymworkoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymworkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
