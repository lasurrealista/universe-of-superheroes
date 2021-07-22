import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelCreatorsComponent } from './marvel-creators.component';

describe('MarvelCreatorsComponent', () => {
  let component: MarvelCreatorsComponent;
  let fixture: ComponentFixture<MarvelCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelCreatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
