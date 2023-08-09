import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailEvaluationComponent } from './mail-evaluation.component';

describe('MailEvaluationComponent', () => {
  let component: MailEvaluationComponent;
  let fixture: ComponentFixture<MailEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
