import { TestBed } from '@angular/core/testing';

import { GetrequestedeorderService } from './getrequestedeorder.service';

describe('GetrequestedeorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetrequestedeorderService = TestBed.get(GetrequestedeorderService);
    expect(service).toBeTruthy();
  });
});
