import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelEvent } from 'src/app/model/marvel-event';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { MarvelEventService } from 'src/app/service/marvel-event.service';

@Component({
  selector: 'app-marvel-events',
  templateUrl: './marvel-events.component.html',
  styleUrls: ['./marvel-events.component.scss']
})
export class MarvelEventsComponent implements OnInit {

  copyright: string = 'Data provided by Marvel. © 2014 Marvel';
  url: string = 'https://www.marvel.com/comics/events_crossovers';
  linkText: string = 'Marvel Events';

  tableColumns: ITableColumn[] = this.config.marvelEventColumns;
  list$: Observable<MarvelEvent[]> = this.marvelEventService.getAll();

  constructor(
    private config: ConfigService,
    private marvelEventService: MarvelEventService,
    ) { }

  ngOnInit(): void {
  }

}
