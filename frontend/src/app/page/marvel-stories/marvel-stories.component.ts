import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelStory } from 'src/app/model/marvel-story';
import { ITableColumn, ConfigService } from 'src/app/service/config.service';
import { MarvelStoryService } from 'src/app/service/marvel-story.service';

@Component({
  selector: 'app-marvel-stories',
  templateUrl: './marvel-stories.component.html',
  styleUrls: ['./marvel-stories.component.scss']
})
export class MarvelStoriesComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.marvelStoryColumns;
  list$: Observable<MarvelStory[]> = this.marvelStoryService.getAll();

  constructor(
    private config: ConfigService,
    private marvelStoryService: MarvelStoryService,
    ) { }

  ngOnInit(): void {
  }

}
