import { TestBed } from '@angular/core/testing';

import { MyFirstTableService } from './my-first-table.service';

describe('MyFirstTableService', () => {
  let service: MyFirstTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFirstTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
