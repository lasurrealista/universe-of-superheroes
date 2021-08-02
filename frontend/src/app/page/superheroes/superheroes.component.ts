import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Superhero} from 'src/app/model/superhero';
import {SuperheroService} from 'src/app/service/superhero.service';
import {ITableColumn, ConfigService} from 'src/app/service/config.service';
import {tap} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

interface IPageBtn {
    page: number;
}

@Component({selector: 'app-superheroes', templateUrl: './superheroes.component.html', styleUrls: ['./superheroes.component.scss']})
export class SuperheroesComponent implements OnInit {

    copyright : string = 'Data provided by SuperHero API';

    tableColumns : ITableColumn[] = this.config.superheroColumns;
    list$ : Observable < Superhero[] > = this.superheroService.getAll().pipe(tap(superheroes => this.superheroesProperties.count = superheroes.length));

    constructor(
      private config : ConfigService,
      private superheroService : SuperheroService,
    ) { }

    ngOnInit(): void {}

    onDelete(superhero: Superhero): void {
        this.superheroService.delete(superhero).subscribe(
          () => this.list$ = this.superheroService.getAll()
        )
    }

    superheroesProperties : {
        count: number
    } = {
        count: 0
    };
    pageSize : number = 10;
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

    filterKey : string = '';
    phrase : string = '';

    searchEvent(event : Event): void {
        this.phrase = (event.target as HTMLInputElement).value;
    }

    columnKey : string = '';
    sortDir : number = -1;

    onColumnSelect(key : string): void {
        this.columnKey = key;
        this.sortDir = this.sortDir * (-1);
    }

}
