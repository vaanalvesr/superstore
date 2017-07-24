import { TestBed, inject } from '@angular/core/testing';

import { FfService } from './ff.service';

describe('FfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FfService]
    });
  });

  it('should be created', inject([FfService], (service: FfService) => {
    expect(service).toBeTruthy();
  }));
});
