import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Superhero } from '../model/superhero';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService extends BaseService<Superhero>{

  constructor(
    public http: HttpClient,
  ) {
    super(http);
    this.entity = 'superheroes';
  }
}
