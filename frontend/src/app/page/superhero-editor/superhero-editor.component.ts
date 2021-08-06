import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Superhero } from 'src/app/model/superhero';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { SuperheroService } from 'src/app/service/superhero.service';

@Component({
  selector: 'app-superhero-editor',
  templateUrl: './superhero-editor.component.html',
  styleUrls: ['./superhero-editor.component.scss']
})
export class SuperheroEditorComponent implements OnInit {

  fields: ITableColumn[] = this.configService.superheroColumns;
  updating : boolean = false;
  superhero$: Observable<Superhero | undefined> = of(new Superhero() );

  superhero: Superhero = new Superhero();

  constructor(
    private superheroService: SuperheroService,
    private activatedRoute: ActivatedRoute,
    private configService: ConfigService,
    private router: Router,
    // private notifyService : NotificationService,
  ) { }

  ngOnInit(): void {
    this.superheroService.getAll();
    this.activatedRoute.params.subscribe(
      params => {
        if (Number(params.id == 0)) {
          this.superhero$ = of( new Superhero() );
        } else {
          this.superhero$ = this.superheroService.get(Number(params.id));
        }
      })
  }

  /*
  showHtmlToasterUpdate(){
    this.notifyService.showHTMLMessage(`Updating was successful.`, ``, 3000)
  }
  */

  onUpdate(form: NgForm, superhero: Superhero): void {

    this.updating = true;

    if (superhero._id == 0) {
      this.superheroService.create(superhero).subscribe(
        () => this.router.navigate(['superheroes'])
      );
    } else {
      this.superheroService.update(superhero).subscribe(
        () => this.router.navigate(['superheroes'])
      );
    }
}
}
