import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCreatorEditorComponent } from './marvel-creator-editor.component';

describe('MarvelCreatorEditorComponent', () => {
  let component: MarvelCreatorEditorComponent;
  let fixture: ComponentFixture<MarvelCreatorEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelCreatorEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCreatorEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
