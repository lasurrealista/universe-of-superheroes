import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { MarvelComic } from 'src/app/model/marvel-comic';
import { MarvelComicService } from 'src/app/service/marvel-comic.service';

@Component({
  selector: 'app-marvel-comic-editor',
  templateUrl: './marvel-comic-editor.component.html',
  styleUrls: ['./marvel-comic-editor.component.scss']
})
export class MarvelComicEditorComponent implements OnInit {

  marvelComic$: Observable<MarvelComic> = this.ar.params.pipe(
    switchMap(params => {
      if (params.id === '0') {
        return of(new MarvelComic());
      }
      return this.marvelComicService.get(params.id);
    })
  );
  marvelComic: MarvelComic = new MarvelComic();

  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private marvelComicService: MarvelComicService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.marvelComic$.subscribe(
      marvelComic => {
        this.marvelComic = marvelComic;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {
    /*
   _id: number | string = '';
    thumbnail: string = '';
    title: string = '';
    pageCount: number = 0;
    url: string = ''
  */
    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.marvelComic._id}),
      new InputField({key: 'thumbnail', label: 'Image', type: 'text', value: this.marvelComic.thumbnail,
        validators: [Validators.required, Validators.pattern(/(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif)+$/)],
        errorMessage: 'The image of the comic must be a valid URL ending with .jpg, .png, .gif and .jpeg.'}),
      new InputField({key: 'title', label: 'Title', type: 'text', value: this.marvelComic.title,
        validators: [Validators.required, Validators.pattern(/^[A-Za-z0-9][ A-Za-z0-9_@./#&+-]{0,49}/)],
        errorMessage: 'The title of the comic must be between 1 and 50 characters.'}),
      new InputField({key: 'pageCount', label: 'Number of Pages', type: 'number', value: this.marvelComic.pageCount,
        validators: [Validators.required, Validators.pattern(/^[0-9]+$/)],
        errorMessage: 'This should be a number.'}),
      new InputField({key: 'url', label: 'Homepage', type: 'text', value: this.marvelComic.url,
        validators: [Validators.required, Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)],
        errorMessage: 'The homepage of the comic must be a valid URL.'}),
    ];
  }

  onSave(marvelComic: MarvelComic): void {
    if (marvelComic._id == 0) {
      this.marvelComicService.create(marvelComic).subscribe(
        () => this.router.navigate(['marvel-universe/marvel-comics'])
      );
    } else {
      //this.updating = true;
      this.marvelComicService.update(marvelComic).subscribe(
        () => this.router.navigate(['marvel-universe/marvel-comics'])
      );
      }
  }
}
