import { TestBed } from '@angular/core/testing';

import { MarvelComicService } from './marvel-comic.service';

describe('MarvelComicService', () => {
  let service: MarvelComicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelComicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
