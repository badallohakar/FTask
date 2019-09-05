import { TestBed } from '@angular/core/testing';

import { EmployeelistService } from './employeelist.service';

describe('EmployeelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeelistService = TestBed.get(EmployeelistService);
    expect(service).toBeTruthy();
  });
});
