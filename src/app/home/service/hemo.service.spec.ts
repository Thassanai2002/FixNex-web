import { TestBed } from '@angular/core/testing';

import { HemoService } from './hemo.service';

describe('HemoService', () => {
  let service: HemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
