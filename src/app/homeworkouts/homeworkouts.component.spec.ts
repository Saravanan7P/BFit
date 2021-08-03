import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkoutsComponent } from './homeworkouts.component';

describe('HomeworkoutsComponent', () => {
  let component: HomeworkoutsComponent;
  let fixture: ComponentFixture<HomeworkoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
