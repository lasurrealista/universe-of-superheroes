import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Superhero } from 'src/app/model/superhero';
import { SuperheroService } from 'src/app/service/superhero.service';

interface IPageBtn {
  page: number;
}

@Component({
  selector: 'app-superheroes-cards',
  templateUrl: './superheroes-cards.component.html',
  styleUrls: ['./superheroes-cards.component.scss']
})
export class SuperheroesCardsComponent implements OnInit {

@Input() superhero: Superhero = new Superhero();
list$: Observable<Superhero[]> = this.superheroService.getAll()
  .pipe(tap(superheroes => this.superheroesProperties.count = superheroes.length));;

  constructor(
    private superheroService: SuperheroService,
  ) { }

  ngOnInit(): void {
    this.superheroService.getAll();
  }

  phrase: string = '';

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  superheroesProperties : {
    count: number
      } = {
    count: 0
  };

pageSize : number = 12;
pageStart : number = 1;
currentPage : number = 1;

get paginator(): IPageBtn[]{
    const pages: IPageBtn[] = [];
    for (let i = 0; i < this.superheroesProperties.count / this.pageSize && pages.length < 10; i++) {
        const page = this.pageStart + i;
        pages.push({page});
    }
    return pages;
}

get pageSliceStart(): number {
    const index = this.currentPage - 1;
    return index === 0 ? 0 : (index * this.pageSize);
}

get pageSliceEnd(): number {
    return this.pageSliceStart + this.pageSize;
}

onPaginate(event : Event, btn : IPageBtn): void {
    event.preventDefault();
    this.currentPage = btn.page;
    this.pageStart = (btn.page - 5) < 1 ? 1 : (btn.page - 5);
}

onStepPage(event : Event, step : number): void {
    event.preventDefault();
    this.currentPage += step;
    this.pageStart = (this.currentPage - 5) < 1 ? 1 : (this.currentPage - 5);
}

}
