import { TestBed } from '@angular/core/testing';

import { AccontService } from './accont.service';

describe('AccontService', () => {
  let service: AccontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
