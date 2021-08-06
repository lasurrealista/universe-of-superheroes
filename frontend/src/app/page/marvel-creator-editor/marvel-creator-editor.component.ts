import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { MarvelCreator } from 'src/app/model/marvel-creator';
import { MarvelCreatorService } from 'src/app/service/marvel-creator.service';

@Component({
  selector: 'app-marvel-creator-editor',
  templateUrl: './marvel-creator-editor.component.html',
  styleUrls: ['./marvel-creator-editor.component.scss']
})
export class MarvelCreatorEditorComponent implements OnInit {

  marvelCreator$: Observable<MarvelCreator> = this.ar.params.pipe(
    switchMap(params => this.marvelCreatorService.get(params.id))
  );
  marvelCreator: MarvelCreator = new MarvelCreator();

  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private marvelCreatorService: MarvelCreatorService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.marvelCreator$.subscribe(
      marvelCreator => {
        this.marvelCreator = marvelCreator;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {
    /*
   _id: number | string ='';
    fullName: string = '';
    thumbnail: string = '';
    comicsAvailable: number = 0;
    url: string = ''
  */
    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.marvelCreator._id}),
      new InputField({key: 'fullName', label: 'Full Name', type: 'text', value: this.marvelCreator.fullName,
        validators: [Validators.required, Validators.pattern(/^[A-Za-z0-9][ A-Za-z0-9_@./#&+-]{0,24}/)],
        errorMessage: 'The name of the creator must be between 1 and 25 characters.'}),
      new InputField({key: 'thumbnail', label: 'Photo', type: 'text', value: this.marvelCreator.thumbnail,
        validators: [Validators.required, Validators.pattern(/(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif)+$/)],
        errorMessage: 'The photo of the creator must be a valid URL ending with .jpg, .png, .gif and .jpeg.'}),
      new InputField({key: 'comicsAvailable', label: 'Available Comics', type: 'number', value: this.marvelCreator.comicsAvailable,
        validators: [Validators.required, Validators.pattern(/^[0-9]{0,2}$/)],
        errorMessage: 'This should be a one- or two-digit number.'}),
      new InputField({key: 'url', label: 'Homepage', type: 'text', value: this.marvelCreator.url,
        validators: [Validators.required, Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)],
        errorMessage: 'The homepage of the creator must be a valid URL.'}),
    ];
  }

  onSave(marvelCreator: MarvelCreator): void {
    this.marvelCreatorService.update(marvelCreator).subscribe(
      entity => this.router.navigate(['marvel-universe/marvel-creators'])
    );
  }
}
