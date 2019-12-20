import { TestBed, inject } from '@angular/core/testing';

import { HeladosService } from './heladosService.service';

describe('HeladosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeladosService]
    });
  });

  it('should be created', inject([HeladosService], (service: HeladosService) => {
    expect(service).toBeTruthy();
  }));
});
