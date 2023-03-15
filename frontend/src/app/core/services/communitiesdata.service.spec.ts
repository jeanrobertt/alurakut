import { TestBed } from '@angular/core/testing';

import { CommunitiesdataService } from './communitiesdata.service';

describe('CommunitiesdataService', () => {
  let service: CommunitiesdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunitiesdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
