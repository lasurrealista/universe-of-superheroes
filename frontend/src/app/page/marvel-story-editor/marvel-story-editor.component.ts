import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MarvelStory } from 'src/app/model/marvel-story';
import { MarvelStoryService } from 'src/app/service/marvel-story.service';

@Component({
  selector: 'app-marvel-story-editor',
  templateUrl: './marvel-story-editor.component.html',
  styleUrls: ['./marvel-story-editor.component.scss']
})
export class MarvelStoryEditorComponent implements OnInit {

  marvelStory$: Observable<MarvelStory> = this.ar.params.pipe(
    switchMap(params => this.marvelStoryService.get(params.id))
  );
  marvelStory: MarvelStory = new MarvelStory();

  constructor(
    private marvelStoryService: MarvelStoryService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(marvelStory: MarvelStory): void {
    this.marvelStoryService.update(marvelStory).subscribe(
      entity => this.router.navigate(['marvel-universe/marvel-stories'])
    );
  }
}
