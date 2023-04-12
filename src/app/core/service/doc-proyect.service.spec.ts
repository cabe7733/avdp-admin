import { TestBed } from '@angular/core/testing';

import { DocProyectService } from './doc-proyect.service';

describe('DocProyectService', () => {
  let service: DocProyectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocProyectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
