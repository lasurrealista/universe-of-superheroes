import { Injectable } from '@angular/core';
import { get } from 'lodash';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
  pipes?: any[];
  pipeArgs?: any[][];
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://localhost:3000/';

  superheroColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "name", title: "Name"},
    {key: "slug", title: "Slug"},
    {key: "powerstats", title: "Powerstats*",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [[
        "intelligence",
        "strength",
        "speed",
        "durability",
        "power",
        "combat"]]},
    {key: "appearance", title: "Appearance",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [[
        "gender",
        "race",
        "height",
        "weight",
        "eyeColor",
        "hairColor",
      ]]},
    {key: "biography", title: "Biography",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [[
      "placeOfBirth",
      "firstAppearance",
      "publisher",
    ]]},
    {key: "work", title: "Work (occupation, base)",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [[
        "occupation",
        "base"]]},
    {key: "connections", title: "Relatives",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [["relatives"]]},
    {key: "images", title: "Image",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [[
      "xs"]]},
  ];

  marvelCharacterColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "name", title: "Name"},
    {key: "thumbnail", title: "Image"},
    {key: "profile", title: "Profile"},
    {key: "url", title: "Home Page"},
    {key: "stories", title: "Stories"}
  ];

  constructor() { }

  // row.customer.name => (row, 'customer.name')
  static getSubProperty(obj: any, ...keys: string[]): string | number | boolean | undefined {
    return keys.map( key => get(obj, key) ).join(', ');
  }
}
