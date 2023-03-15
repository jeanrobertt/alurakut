import { TestBed } from '@angular/core/testing';

import { MessagesdataService } from './messagesdata.service';

describe('MessagesdataService', () => {
  let service: MessagesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
