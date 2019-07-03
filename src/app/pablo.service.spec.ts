import { TestBed } from '@angular/core/testing';

import { PabloService } from './pablo.service';

describe('PabloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PabloService = TestBed.get(PabloService);
    expect(service).toBeTruthy();
  });
});
