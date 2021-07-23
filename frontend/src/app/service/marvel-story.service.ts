import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarvelStory } from '../model/marvel-story';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelStoryService  extends BaseService<MarvelStory>{

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'marvel-stories';
  }
}
