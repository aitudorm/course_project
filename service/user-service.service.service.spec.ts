import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service.service';

describe('UserService.ServiceService', () => {
  let service: UserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
