import { TestBed } from '@angular/core/testing';

import { SlideServiceService } from './slide-service.service';

describe('SlideServiceService', () => {
  let service: SlideServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
