import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendInterviewComponent } from './attend-interview.component';

describe('AttendInterviewComponent', () => {
  let component: AttendInterviewComponent;
  let fixture: ComponentFixture<AttendInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
