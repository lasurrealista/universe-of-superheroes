import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelCharacter } from 'src/app/model/marvel-character';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { MarvelCharacterService } from 'src/app/service/marvel-character.service';

@Component({
  selector: 'app-marvel-characters',
  templateUrl: './marvel-characters.component.html',
  styleUrls: ['./marvel-characters.component.scss']
})
export class MarvelCharactersComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.marvelCharacterColumns;
  list$: Observable<MarvelCharacter[]> = this.marvelCharacterService.getAll();

  constructor(
    private config: ConfigService,
    private marvelCharacterService: MarvelCharacterService,
    ) { }

  ngOnInit(): void {
  }
}
