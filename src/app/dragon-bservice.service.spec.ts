import { TestBed } from '@angular/core/testing';

import { DragonBServiceService } from './dragon-bservice.service';

describe('DragonBServiceService', () => {
  let service: DragonBServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonBServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
