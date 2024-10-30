import { TestBed } from '@angular/core/testing';

import { RantalsService } from './rantals.service';

describe('RantalsService', () => {
  let service: RantalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RantalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
