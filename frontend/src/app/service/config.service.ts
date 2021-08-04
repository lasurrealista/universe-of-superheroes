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

  public readonly apiUrl: string = 'http://127.0.0.1:3000/';

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
      pipes: [ConfigService.getSubProperty, ConfigService.cutLongString],
      pipeArgs: [[
        "occupation",
        "base"], [0, 100]]},
    {key: "connections", title: "Relatives",
      pipes: [ConfigService.getSubProperty, ConfigService.cutLongString],
      pipeArgs: [["relatives"], [0, 100]]},
    {key: "images", title: "Image",
      pipes: [ConfigService.getSubProperty, ConfigService.cutLongString],
      pipeArgs: [["xs"], [0, 20]]},
  ];

  marvelCharacterColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "name", title: "Name"},
    {key: "thumbnail", title: "Image", pipes: [ConfigService.cutLongString],
    pipeArgs: [[0, 25]]},
    {key: "profile", title: "Profile", pipes: [ConfigService.cutLongString],
    pipeArgs: [[0, 25]]},
    {key: "url", title: "Homepage", pipes: [ConfigService.cutLongString],
    pipeArgs: [[0, 25]]},
    {key: "stories", title: "Stories"}
  ];

  marvelComicColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "thumbnail", title: "Image", pipes: [ConfigService.cutLongString],
    pipeArgs: [[0, 25]]},
    {key: "title", title: "Title"},
    {key: "pageCount", title: "Page Count"},
    {key: "url", title: "Homepage", pipes: [ConfigService.cutLongString],
    pipeArgs: [[0, 25]]}
  ];

  marvelCreatorColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "fullName", title: "Full Name"},
    {key: "thumbnail", title: "Image", pipes: [ConfigService.cutLongString],
    pipeArgs: [[0, 25]]},
    {key: "comics - available", title: "Available Comics"},
    {key: "url", title: "Comics", pipes: [ConfigService.cutLongString],
    pipeArgs: [[0, 28]]}
  ];

  marvelEventColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "thumbnail", title: "Image", pipes: [ConfigService.cutLongString],
    pipeArgs: [[0, 25]]},
    {key: "title", title: "Title"},
    {key: "description", title: "Description", pipes: [ConfigService.cutLongString],
    pipeArgs: [[0, 200]]},
    {key: "modified", title: "Modified"},
    {key: "url", title: "Event Homepage", pipes: [ConfigService.cutLongString],
    pipeArgs: [[0, 25]]}
  ];

  marvelStoryColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "name", title: "Name"},
    {key: "title", title: "Description"},
  ];

  userColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "first_name", title: "First Name"},
    {key: "last_name", title: "Last Name"},
    {key: "email", title: "Email"},
    {key: "password", title: "Password"},
    {key: "role", title: "Role"},
  ];

  constructor() { }

  // row.customer.name => (row, 'customer.name')
  static getSubProperty(obj: any, ...keys: string[]): string | number | boolean | undefined {
    return keys.map( key => get(obj, key) ).join(', ');
  }

  static cutLongString(
    data: string,
    start: number,
    end: number,
    curve: string = '...'
  ): string {
    return data.slice(start, end) + curve;
  }
}
