import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { MarvelStory } from 'src/app/model/marvel-story';
import { MarvelStoryService } from 'src/app/service/marvel-story.service';

@Component({
  selector: 'app-marvel-story-editor',
  templateUrl: './marvel-story-editor.component.html',
  styleUrls: ['./marvel-story-editor.component.scss']
})
export class MarvelStoryEditorComponent implements OnInit {

  marvelStory$: Observable<MarvelStory> = this.ar.params.pipe(
    switchMap(params => {
      if (params.id === '0') {
        return of(new MarvelStory());
      }
      return this.marvelStoryService.get(params.id);
    })
  );
  marvelStory: MarvelStory = new MarvelStory();

  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private marvelStoryService: MarvelStoryService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.marvelStory$.subscribe(
      marvelStory => {
        this.marvelStory = marvelStory;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {
    /*
    _id : number | string = '';
    name : string = '';
    title : string = ''
  */
    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.marvelStory._id}),
      new InputField({key: 'name', label: 'Name', type: 'text', value: this.marvelStory.name,
        validators: [Validators.required, Validators.pattern(/^[A-Za-z0-9][ A-Za-z0-9_@./#&+-]{0,24}/)],
        errorMessage: 'The name of the story must be between 1 and 25 characters.'}),
      new InputField({key: 'title', label: 'Description', type: 'text', value: this.marvelStory.title,
        validators: [Validators.required, Validators.pattern(/^[A-Za-z0-9][ A-Za-z0-9_@./#&+-]{0,249}/)],
        errorMessage: 'The description of the story must be between 1 and 250 characters.'}),
    ];
  }

  onSave(marvelStory: MarvelStory): void {

    if (marvelStory._id == 0) {
      this.marvelStoryService.create(marvelStory).subscribe(
        () => this.router.navigate(['marvel-universe/marvel-stories'])
      );
    } else {
      //this.updating = true;
      this.marvelStoryService.update(marvelStory).subscribe(
        () => this.router.navigate(['marvel-universe/marvel-stories'])
      );
    }
  }
}
