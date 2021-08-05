import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MarvelCreator } from 'src/app/model/marvel-creator';
import { MarvelCreatorService } from 'src/app/service/marvel-creator.service';

@Component({
  selector: 'app-marvel-creator-editor',
  templateUrl: './marvel-creator-editor.component.html',
  styleUrls: ['./marvel-creator-editor.component.scss']
})
export class MarvelCreatorEditorComponent implements OnInit {

  marvelCreator$: Observable<MarvelCreator> = this.ar.params.pipe(
    switchMap(params => this.marvelCreatorService.get(params.id))
  );
  marvelCreator: MarvelCreator = new MarvelCreator();

  constructor(
    private marvelCreatorService: MarvelCreatorService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(marvelCreator: MarvelCreator): void {
    this.marvelCreatorService.update(marvelCreator).subscribe(
      entity => this.router.navigate(['marvel-universe/marvel-creators'])
    );
  }
}
