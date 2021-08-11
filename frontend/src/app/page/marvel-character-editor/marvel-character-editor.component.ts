import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { MarvelCharacter } from 'src/app/model/marvel-character';
import { MarvelCharacterService } from 'src/app/service/marvel-character.service';

@Component({
  selector: 'app-marvel-character-editor',
  templateUrl: './marvel-character-editor.component.html',
  styleUrls: ['./marvel-character-editor.component.scss']
})
export class MarvelCharacterEditorComponent implements OnInit {

  marvelCharacter$: Observable<MarvelCharacter> = this.ar.params.pipe(
    switchMap(params => {
      if (params.id === '0') {
        return of(new MarvelCharacter());
      }
      return this.marvelCharacterService.get(params.id);
    })
  );
  marvelCharacter: MarvelCharacter = new MarvelCharacter();

  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private marvelCharacterService: MarvelCharacterService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.marvelCharacter$.subscribe(
      marvelCharacter => {
        this.marvelCharacter = marvelCharacter;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {
    /*
    _id : number | string = '';
    name : string = '';
    thumbnail : string = '';
    profile : string = '';
    url : string = '';
    stories : number = 0
  */
    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.marvelCharacter._id}),
      new InputField({key: 'name', label: 'Name', type: 'text', value: this.marvelCharacter.name,
        validators: [Validators.required, Validators.pattern(/^[A-Za-z0-9][ A-Za-z0-9_@./#&+-]{0,24}/)],
        errorMessage: 'The name of the character must be between 1 and 25 characters.'}),
      new InputField({key: 'thumbnail', label: 'Image', type: 'text', value: this.marvelCharacter.thumbnail,
        validators: [Validators.required, Validators.pattern(/(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif)+$/)],
        errorMessage: 'The image of the character must be a valid URL ending with .jpg, .png, .gif and .jpeg.'}),
      new InputField({key: 'profile', label: 'Profile', type: 'text', value: this.marvelCharacter.profile,
        validators: [Validators.required, Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)],
        errorMessage: 'The profile of the character must be a valid URL.'}),
      new InputField({key: 'url', label: 'Homepage', type: 'text', value: this.marvelCharacter.url,
        validators: [Validators.required, Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)],
        errorMessage: 'The homepage of the character must be a valid URL.'}),
      new InputField({key: 'stories', label: 'Stories', type: 'number', value: this.marvelCharacter.stories,
        validators: [Validators.required, Validators.pattern(/^[0-9]{2}$/)],
        errorMessage: 'This should be a two-digit number.'}),
    ];
  }

  onSave(marvelCharacter: MarvelCharacter): void {

    if (marvelCharacter._id == 0) {
      this.marvelCharacterService.create(marvelCharacter).subscribe(
        () => this.router.navigate(['marvel-universe/marvel-characters'])
      );
    } else {
      //this.updating = true;
      this.marvelCharacterService.update(marvelCharacter).subscribe(
        () => this.router.navigate(['marvel-universe/marvel-characters'])
      );
      }
  }

}
