import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Superhero } from 'src/app/model/superhero';
import { SuperheroService } from 'src/app/service/superhero.service';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss']
})
export class SuperheroesComponent implements OnInit {

  copyright: string = 'Data provided by SuperHero API';

  tableColumns: ITableColumn[] = this.config.superheroColumns;
  list$: Observable<Superhero[]> = this.superheroService.getAll();

  constructor(
    private config: ConfigService,
    private superheroService: SuperheroService,
    ) { }

  ngOnInit(): void {
  }
}
