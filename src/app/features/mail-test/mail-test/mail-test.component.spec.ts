import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailTestComponent } from './mail-test.component';

describe('MailTestComponent', () => {
  let component: MailTestComponent;
  let fixture: ComponentFixture<MailTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
