import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MarvelEvent } from 'src/app/model/marvel-event';
import { MarvelEventService } from 'src/app/service/marvel-event.service';

@Component({
  selector: 'app-marvel-event-editor',
  templateUrl: './marvel-event-editor.component.html',
  styleUrls: ['./marvel-event-editor.component.scss']
})
export class MarvelEventEditorComponent implements OnInit {

  marvelEvent$: Observable<MarvelEvent> = this.ar.params.pipe(
    switchMap(params => this.marvelEventService.get(params.id))
  );
  marvelEvent: MarvelEvent = new MarvelEvent();

  constructor(
    private marvelEventService: MarvelEventService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
}
