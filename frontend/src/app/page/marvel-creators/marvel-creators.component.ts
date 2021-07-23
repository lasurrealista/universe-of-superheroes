import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelCreator } from 'src/app/model/marvel-creator';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { MarvelCreatorService } from 'src/app/service/marvel-creator.service';

@Component({
  selector: 'app-marvel-creators',
  templateUrl: './marvel-creators.component.html',
  styleUrls: ['./marvel-creators.component.scss']
})
export class MarvelCreatorsComponent implements OnInit {

  copyright: string = 'Data provided by Marvel. © 2014 Marvel';
  url: string = 'https://www.marvel.com/comics/creators';
  linkText: string = 'Marvel Creators';

  tableColumns: ITableColumn[] = this.config.marvelCreatorColumns;
  list$: Observable<MarvelCreator[]> = this.marvelCreatorService.getAll();

  constructor(
    private config: ConfigService,
    private marvelCreatorService: MarvelCreatorService,
    ) { }

  ngOnInit(): void {
  }

}
