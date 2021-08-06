import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { MarvelEvent } from 'src/app/model/marvel-event';
import { MarvelEventService } from 'src/app/service/marvel-event.service';

@Component({
  selector: 'app-marvel-event-editor',
  templateUrl: './marvel-event-editor.component.html',
  styleUrls: ['./marvel-event-editor.component.scss']
})
export class MarvelEventEditorComponent implements OnInit {

  marvelEvent$: Observable<MarvelEvent> = this.ar.params.pipe(
    switchMap(params => {
      if (Number(params.id) === 0) {
        return of(new MarvelEvent());
      }
      return this.marvelEventService.get(Number(params.id));
    })
  );
  marvelEvent: MarvelEvent = new MarvelEvent();

  fields: FieldBase<any>[] = [];
  showForm: boolean = false;

  constructor(
    private marvelEventService: MarvelEventService,
    private ar: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.marvelEvent$.subscribe(
      marvelEvent => {
        this.marvelEvent = marvelEvent;
        this.setForm();
        this.showForm = true;
      }
    );
  }

  setForm(): void {
    /*
     _id : number | string = '';
    title : string = '';
    description : string = '';
    modified : string = '';
    url : string = ''
  */
    this.fields = [
      new InputField({key: '_id', label: '', type: 'hidden', value: this.marvelEvent._id}),
      new InputField({key: 'title', label: 'Title', type: 'text', value: this.marvelEvent.title,
        validators: [Validators.required, Validators.pattern(/^[A-Za-z0-9][ A-Za-z0-9_@./#&+-]{0,49}/)],
        errorMessage: 'The title of the event must be between 1 and 50 characters.'}),
      new TextareaField({key: 'description', label: 'Description', type: 'text', value: this.marvelEvent.description,
        validators: [Validators.required, Validators.pattern(/^[A-Za-z0-9][ A-Za-z0-9_@./#&+-]{0,199}/)],
        errorMessage: 'The description of the event must be between 1 and 200 characters.'}),
      new InputField({key: 'modified', label: 'Modified', type: 'text', value: this.marvelEvent.modified,
        validators: [Validators.required, Validators.pattern(/^[A-Za-z0-9][ A-Za-z0-9_,;]{0,14}/)],
        errorMessage: 'The date of modification must be between 1 and 15 characters.'}),
      new InputField({key: 'url', label: 'Homepage', type: 'text', value: this.marvelEvent.url,
        validators: [Validators.required, Validators.pattern(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)],
        errorMessage: 'The homepage of the event must be a valid URL.'}),
    ];
  }

  onSave(marvelEvent: MarvelEvent): void {
    if (marvelEvent._id == 0) {
      this.marvelEventService.create(marvelEvent).subscribe(
        () => this.router.navigate(['marvel-universe/marvel-events'])
      );
    } else {
      //this.updating = true;
      this.marvelEventService.update(marvelEvent).subscribe(
        () => this.router.navigate(['marvel-universe/marvel-events'])
      );
      }
  }
}
