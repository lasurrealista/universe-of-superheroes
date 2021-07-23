import { TestBed } from '@angular/core/testing';

import { MarvelEventService } from './marvel-event.service';

describe('MarvelEventService', () => {
  let service: MarvelEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
