import { TestBed } from '@angular/core/testing';

import { AuthGuardResturantService } from './auth-guard-resturant.service';

describe('AuthGuardResturantService', () => {
  let service: AuthGuardResturantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardResturantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
