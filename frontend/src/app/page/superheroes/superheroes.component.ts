import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Superhero } from 'src/app/model/superhero';
import { SuperheroService } from 'src/app/service/superhero.service';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss']
})
export class SuperheroesComponent implements OnInit {

  superheroes: Observable<Superhero[]> = this.superheroService.getAll();

  constructor(
    private superheroService: SuperheroService,
  ) { }

  ngOnInit(): void {
  }

}
