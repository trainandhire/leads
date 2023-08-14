import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingTrainerSummeryComponent } from './typing-trainer-summery.component';

describe('TypingTrainerSummeryComponent', () => {
  let component: TypingTrainerSummeryComponent;
  let fixture: ComponentFixture<TypingTrainerSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypingTrainerSummeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingTrainerSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
