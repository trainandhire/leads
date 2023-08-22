import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesPermissionsComponent } from './features-permissions.component';

describe('FeaturesPermissionsComponent', () => {
  let component: FeaturesPermissionsComponent;
  let fixture: ComponentFixture<FeaturesPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesPermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
