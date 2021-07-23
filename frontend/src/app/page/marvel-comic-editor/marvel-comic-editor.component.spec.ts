import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelComicEditorComponent } from './marvel-comic-editor.component';

describe('MarvelComicEditorComponent', () => {
  let component: MarvelComicEditorComponent;
  let fixture: ComponentFixture<MarvelComicEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelComicEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelComicEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
