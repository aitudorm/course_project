import { TestBed } from '@angular/core/testing';

import { FindCurrentUrlService } from './find-current-url.service';

describe('FindCurrentUrlService', () => {
  let service: FindCurrentUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindCurrentUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
