import { TestBed } from '@angular/core/testing';

import { RegisrationserviceService } from './regisrationservice.service';

describe('RegisrationserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisrationserviceService = TestBed.get(RegisrationserviceService);
    expect(service).toBeTruthy();
  });
});
