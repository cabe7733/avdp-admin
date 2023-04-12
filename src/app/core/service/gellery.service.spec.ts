import { TestBed } from '@angular/core/testing';

import { GelleryService } from './gellery.service';

describe('GelleryService', () => {
  let service: GelleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GelleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
