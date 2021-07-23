import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelEventEditorComponent } from './marvel-event-editor.component';

describe('MarvelEventEditorComponent', () => {
  let component: MarvelEventEditorComponent;
  let fixture: ComponentFixture<MarvelEventEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelEventEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelEventEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
