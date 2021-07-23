import { TestBed } from '@angular/core/testing';

import { MarvelStoryService } from './marvel-story.service';

describe('MarvelStoryService', () => {
  let service: MarvelStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
