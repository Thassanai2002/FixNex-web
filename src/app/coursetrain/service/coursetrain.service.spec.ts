import { TestBed } from '@angular/core/testing';

import { CoursetrainService } from './coursetrain.service';

describe('CoursetrainService', () => {
  let service: CoursetrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursetrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
