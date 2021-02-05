import { TestBed } from '@angular/core/testing';

import { NgrCardService } from './ngr-card.service';

describe('NgrCardService', () => {
  let service: NgrCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
