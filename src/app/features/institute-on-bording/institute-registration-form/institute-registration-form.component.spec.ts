import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteRegistrationFormComponent } from './institute-registration-form.component';

describe('InstituteRegistrationFormComponent', () => {
  let component: InstituteRegistrationFormComponent;
  let fixture: ComponentFixture<InstituteRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteRegistrationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
