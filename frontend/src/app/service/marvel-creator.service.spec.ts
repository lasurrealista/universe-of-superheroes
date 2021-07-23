import { TestBed } from '@angular/core/testing';

import { MarvelCreatorService } from './marvel-creator.service';

describe('MarvelCreatorService', () => {
  let service: MarvelCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
