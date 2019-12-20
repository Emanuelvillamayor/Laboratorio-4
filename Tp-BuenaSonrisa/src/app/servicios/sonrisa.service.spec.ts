import { TestBed } from '@angular/core/testing';

import { SonrisaService } from './sonrisa.service';

describe('SonrisaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SonrisaService = TestBed.get(SonrisaService);
    expect(service).toBeTruthy();
  });
});
