import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelEventsComponent } from './marvel-events.component';

describe('MarvelEventsComponent', () => {
  let component: MarvelEventsComponent;
  let fixture: ComponentFixture<MarvelEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
