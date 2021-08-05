import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MarvelCharacter } from 'src/app/model/marvel-character';
import { MarvelCharacterService } from 'src/app/service/marvel-character.service';

@Component({
  selector: 'app-marvel-character-editor',
  templateUrl: './marvel-character-editor.component.html',
  styleUrls: ['./marvel-character-editor.component.scss']
})
export class MarvelCharacterEditorComponent implements OnInit {

  marvelCharacter$: Observable<MarvelCharacter> = this.ar.params.pipe(
    switchMap(params => this.marvelCharacterService.get(params.id))
  );
  marvelCharacter: MarvelCharacter = new MarvelCharacter();

  constructor(
    private marvelCharacterService: MarvelCharacterService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
