import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroEditorComponent } from './superhero-editor.component';

describe('SuperheroEditorComponent', () => {
  let component: SuperheroEditorComponent;
  let fixture: ComponentFixture<SuperheroEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
