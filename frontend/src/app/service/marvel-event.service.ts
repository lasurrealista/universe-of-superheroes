import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarvelEvent } from '../model/marvel-event';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelEventService extends BaseService<MarvelEvent>{

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'marvel-events';
  }
}
