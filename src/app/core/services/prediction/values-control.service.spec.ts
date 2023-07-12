import { TestBed } from '@angular/core/testing';

import { ValuesControlService } from './values-control.service';

describe('ValuesControlService', () => {
  let service: ValuesControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValuesControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
