import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://localhost:3000/';

  superHeroColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "name", title: "Name"},
    {key: "slug", title: "Slug"},
    {key: "powerstats", title: "Powerstats"},
    {key: "appearance", title: "Appearance"},
    {key: "biography", title: "Biography"},
    {key: "work", title: "Work"},
    {key: "connections", title: "Connections"},
    {key: "images", title: "Image"},
  ];

  constructor() { }
}
