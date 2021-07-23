import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCharacterEditorComponent } from './marvel-character-editor.component';

describe('MarvelCharacterEditorComponent', () => {
  let component: MarvelCharacterEditorComponent;
  let fixture: ComponentFixture<MarvelCharacterEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelCharacterEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCharacterEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
