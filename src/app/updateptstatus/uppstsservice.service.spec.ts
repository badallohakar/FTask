import { TestBed } from '@angular/core/testing';

import { UppstsserviceService } from './uppstsservice.service';

describe('UppstsserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UppstsserviceService = TestBed.get(UppstsserviceService);
    expect(service).toBeTruthy();
  });
});
