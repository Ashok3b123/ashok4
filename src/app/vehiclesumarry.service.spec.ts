import { TestBed } from '@angular/core/testing';

import { VehiclesumarryService } from './vehiclesumarry.service';

describe('VehiclesumarryService', () => {
  let service: VehiclesumarryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclesumarryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
