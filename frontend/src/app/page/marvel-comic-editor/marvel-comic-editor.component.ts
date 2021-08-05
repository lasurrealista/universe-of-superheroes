import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MarvelComic } from 'src/app/model/marvel-comic';
import { MarvelComicService } from 'src/app/service/marvel-comic.service';

@Component({
  selector: 'app-marvel-comic-editor',
  templateUrl: './marvel-comic-editor.component.html',
  styleUrls: ['./marvel-comic-editor.component.scss']
})
export class MarvelComicEditorComponent implements OnInit {

  marvelComic$: Observable<MarvelComic> = this.ar.params.pipe(
    switchMap(params => this.marvelComicService.get(params.id))
  );
  marvelComic: MarvelComic = new MarvelComic();

  constructor(
    private marvelComicService: MarvelComicService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(marvelComic: MarvelComic): void {
    this.marvelComicService.update(marvelComic).subscribe(
      entity => this.router.navigate(['marvel-universe/marvel-comics'])
    );
  }
}
