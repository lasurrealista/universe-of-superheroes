import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarvelCharacter } from '../model/marvel-character';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelCharacterService extends BaseService<MarvelCharacter>{

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'marvel-characters';
  }
}
