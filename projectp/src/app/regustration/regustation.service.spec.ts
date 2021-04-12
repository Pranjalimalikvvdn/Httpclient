import { TestBed } from '@angular/core/testing';

import { RegustationService } from './regustation.service';

describe('RegustationService', () => {
  let service: RegustationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegustationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
