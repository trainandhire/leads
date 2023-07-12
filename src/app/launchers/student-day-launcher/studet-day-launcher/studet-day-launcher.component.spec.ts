import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetDayLauncherComponent } from './studet-day-launcher.component';

describe('StudetDayLauncherComponent', () => {
  let component: StudetDayLauncherComponent;
  let fixture: ComponentFixture<StudetDayLauncherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudetDayLauncherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudetDayLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
