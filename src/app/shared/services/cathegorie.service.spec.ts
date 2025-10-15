import { TestBed } from '@angular/core/testing';

import { CathegorieService } from './cathegorie.service';

describe('CathegorieService', () => {
  let service: CathegorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CathegorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
