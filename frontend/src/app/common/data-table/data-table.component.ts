import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BaseService } from 'src/app/service/base.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

interface IPageBtn {
  page: number;
};

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent<T extends {[propname: string]: any}> implements OnInit {

  @Input() tableColumns: ITableColumn[] = [];
  @Input() list$: Observable<T[]> | null = null;
  @Input() filterKey: string = '';
  phrase: string = '';

  constructor(
    private config: ConfigService,
  ) {

  }

  ngOnInit(): void {
  }

  onDelete(entity: T): void {
    //this.baseService.delete(entity);
  }

  entitiesNum: number = 20;
  pageSize: number = 10;
  pageStart: number = 1;
  currentPage: number = 1;

  get pageSliceStart(): number {
    const index = this.currentPage - 1;
    return index === 0 ? 0 : (index * this.pageSize);
  }
  get pageSliceEnd(): number {
    return this.pageSliceStart + this.pageSize;
  }

  get paginator(): IPageBtn[] {
    const pages: IPageBtn[] = [];
    for (let i = 0; i < this.entitiesNum / this.pageSize && pages.length < 10; i++ ) {
      const page = this.pageStart + i;
      pages.push({page});
    }
    return pages;
  }

  onPaginate(event: Event, btn: IPageBtn): void {
    event.preventDefault();
    this.currentPage = btn.page;
    this.pageStart = (btn.page - 5) < 1 ? 1 : (btn.page - 5);
  }

  onStepPage(event: Event, step: number): void {
    event.preventDefault();
    this.currentPage += step;
    this.pageStart = (this.currentPage - 5) < 1 ? 1 : (this.currentPage - 5);
  }

  searchEvent(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  columnKey : string = '';
  sortDir : number = -1;

  onColumnSelect(key : string): void {
      this.columnKey = key;
      this.sortDir = this.sortDir * (-1);
  }

}
