/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaymaentService } from './paymaent.service';

describe('Service: Paymaent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymaentService]
    });
  });

  it('should ...', inject([PaymaentService], (service: PaymaentService) => {
    expect(service).toBeTruthy();
  }));
});
