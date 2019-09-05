import { TestBed } from '@angular/core/testing';

import { DesignuploadService } from './designupload.service';

describe('DesignuploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignuploadService = TestBed.get(DesignuploadService);
    expect(service).toBeTruthy();
  });
});
