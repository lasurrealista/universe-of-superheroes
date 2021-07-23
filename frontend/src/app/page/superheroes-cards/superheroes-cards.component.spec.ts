import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesCardsComponent } from './superheroes-cards.component';

describe('SuperheroesCardsComponent', () => {
  let component: SuperheroesCardsComponent;
  let fixture: ComponentFixture<SuperheroesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperheroesCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
