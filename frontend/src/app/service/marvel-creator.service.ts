import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarvelCreator } from '../model/marvel-creator';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelCreatorService extends BaseService<MarvelCreator>{

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'marvel-creators';
  }
}
