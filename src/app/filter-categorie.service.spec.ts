import { TestBed } from '@angular/core/testing';

import { FilterCategorieService } from './filter-categorie.service';

describe('FilterCategorieService', () => {
  let service: FilterCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
