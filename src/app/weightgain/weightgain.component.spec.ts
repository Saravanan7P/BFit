import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightgainComponent } from './weightgain.component';

describe('WeightgainComponent', () => {
  let component: WeightgainComponent;
  let fixture: ComponentFixture<WeightgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightgainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
