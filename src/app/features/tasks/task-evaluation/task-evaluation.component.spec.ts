import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEvaluationComponent } from './task-evaluation.component';

describe('TaskEvaluationComponent', () => {
  let component: TaskEvaluationComponent;
  let fixture: ComponentFixture<TaskEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
