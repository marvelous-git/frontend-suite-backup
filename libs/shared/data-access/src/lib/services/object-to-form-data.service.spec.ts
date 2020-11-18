import { TestBed } from '@angular/core/testing';

import { ObjectToFormDataService } from './object-to-form-data.service';

describe('ObjectToFormDataService', () => {
  let service: ObjectToFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectToFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
