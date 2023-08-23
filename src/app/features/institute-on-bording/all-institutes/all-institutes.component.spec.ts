import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInstitutesComponent } from './all-institutes.component';

describe('AllInstitutesComponent', () => {
  let component: AllInstitutesComponent;
  let fixture: ComponentFixture<AllInstitutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllInstitutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
