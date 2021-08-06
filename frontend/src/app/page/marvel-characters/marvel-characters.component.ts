import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  copyright: string = 'Data provided by Marvel. © 2014 Marvel';
  url: string = 'https://www.marvel.com/characters';
  linkText: string = 'Marvel Characters';

  entity: string = 'Marvel Character';

  tableColumns: ITableColumn[] = this.config.marvelCharacterColumns;
  list$: Observable<MarvelCharacter[]> = this.marvelCharacterService.getAll();

  constructor(
    private config: ConfigService,
    private marvelCharacterService: MarvelCharacterService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  onSelectOne(marvelCharacter: MarvelCharacter): void {
    this.router.navigate(['/', 'marvel-universe', 'marvel-characters', marvelCharacter._id])
  }

  onDeleteOne(marvelCharacter: MarvelCharacter): void {
    this.marvelCharacterService.delete(marvelCharacter).subscribe(
      () => this.list$ = this.marvelCharacterService.getAll()
      )
  }

}
