import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Superhero } from 'src/app/model/superhero';
import { SuperheroService } from 'src/app/service/superhero.service';

@Component({
  selector: 'app-superheroes-cards',
  templateUrl: './superheroes-cards.component.html',
  styleUrls: ['./superheroes-cards.component.scss']
})
export class SuperheroesCardsComponent implements OnInit {

@Input() superhero: Superhero = new Superhero();
list$: Observable<Superhero[]> = this.superheroService.getAll();

  constructor(
    private superheroService: SuperheroService,
  ) { }

  ngOnInit(): void {
    this.superheroService.getAll();
  }

}
