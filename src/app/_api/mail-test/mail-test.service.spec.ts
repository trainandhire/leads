import { TestBed } from '@angular/core/testing';

import { MailTestService } from './mail-test.service';

describe('MailTestService', () => {
  let service: MailTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
