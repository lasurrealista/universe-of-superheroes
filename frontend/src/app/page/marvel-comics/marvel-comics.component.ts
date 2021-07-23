import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelComic } from 'src/app/model/marvel-comic';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { MarvelComicService } from 'src/app/service/marvel-comic.service';

@Component({
  selector: 'app-marvel-comics',
  templateUrl: './marvel-comics.component.html',
  styleUrls: ['./marvel-comics.component.scss']
})
export class MarvelComicsComponent implements OnInit {

  copyright: string = 'Data provided by Marvel. © 2014 Marvel';
  url: string = 'https://www.marvel.com/comics';
  linkText: string = 'Marvel Comics';

  tableColumns: ITableColumn[] = this.config.marvelComicColumns;
  list$: Observable<MarvelComic[]> = this.marvelComicService.getAll();

  constructor(
    private config: ConfigService,
    private marvelComicService: MarvelComicService,
    ) { }

  ngOnInit(): void {
  }

}
