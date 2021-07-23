import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelStoryEditorComponent } from './marvel-story-editor.component';

describe('MarvelStoryEditorComponent', () => {
  let component: MarvelStoryEditorComponent;
  let fixture: ComponentFixture<MarvelStoryEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelStoryEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelStoryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
