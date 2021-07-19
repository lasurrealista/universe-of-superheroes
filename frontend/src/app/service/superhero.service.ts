import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Superhero } from '../model/superhero';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService extends BaseService<Superhero>{

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'superheroes';
  }
}
