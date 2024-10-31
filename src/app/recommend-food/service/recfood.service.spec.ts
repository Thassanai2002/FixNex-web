import { TestBed } from '@angular/core/testing';
import { RecfoodService } from './recfood.service';

describe('RecfoodService', () => {
  let service: RecfoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecfoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
