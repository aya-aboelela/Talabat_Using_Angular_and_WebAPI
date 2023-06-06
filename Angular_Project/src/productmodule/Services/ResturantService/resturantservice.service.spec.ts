import { TestBed } from '@angular/core/testing';

import { ResturantserviceService } from './resturantservice.service';

describe('ResturantserviceService', () => {
  let service: ResturantserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
