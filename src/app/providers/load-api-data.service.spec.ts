import { TestBed } from '@angular/core/testing';

import { LoadApiDataService } from './load-api-data.service';

describe('LoadApiDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadApiDataService = TestBed.get(LoadApiDataService);
    expect(service).toBeTruthy();
  });
});
