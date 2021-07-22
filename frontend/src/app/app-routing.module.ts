import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { MarvelComicsComponent } from './page/marvel-comics/marvel-comics.component';
import { MarvelCreatorsComponent } from './page/marvel-creators/marvel-creators.component';
import { MarvelEventsComponent } from './page/marvel-events/marvel-events.component';
import { MarvelStoriesComponent } from './page/marvel-stories/marvel-stories.component';
import { SuperheroesComponent } from './page/superheroes/superheroes.component';
import { MarvelCharactersComponent } from './page/marvel-characters/marvel-characters.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'superheroes',
    component: SuperheroesComponent,
  },
  {
    path: 'marvel-universe/marvel-characters',
    component: MarvelCharactersComponent,
  },
  {
    path: 'marvel-universe/marvel-comics',
    component: MarvelComicsComponent,
  },
  {
    path: 'marvel-universe/marvel-stories',
    component: MarvelStoriesComponent,
  },
  {
    path: 'marvel-universe/marvel-events',
    component: MarvelEventsComponent,
  },
  {
    path: 'marvel-universe/marvel-creators',
    component: MarvelCreatorsComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
