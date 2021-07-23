import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarvelComic } from '../model/marvel-comic';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelComicService extends BaseService<MarvelComic> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'marvel-comics';
  }
}
