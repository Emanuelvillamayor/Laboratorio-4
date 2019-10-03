import { TestBed } from '@angular/core/testing';

import { PalabrasService } from './palabras.service';

describe('PalabrasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PalabrasService = TestBed.get(PalabrasService);
    expect(service).toBeTruthy();
  });
});
