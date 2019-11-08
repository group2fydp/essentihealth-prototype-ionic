import { TestBed } from '@angular/core/testing';

import { SPElementsService } from './spelements.service';

describe('SPElementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SPElementsService = TestBed.get(SPElementsService);
    expect(service).toBeTruthy();
  });
});
