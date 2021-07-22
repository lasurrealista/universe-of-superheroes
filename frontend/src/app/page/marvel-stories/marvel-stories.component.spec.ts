import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelStoriesComponent } from './marvel-stories.component';

describe('MarvelStoriesComponent', () => {
  let component: MarvelStoriesComponent;
  let fixture: ComponentFixture<MarvelStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
