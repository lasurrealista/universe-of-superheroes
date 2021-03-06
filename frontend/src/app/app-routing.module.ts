import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { MarvelComicsComponent } from './page/marvel-comics/marvel-comics.component';
import { MarvelCreatorsComponent } from './page/marvel-creators/marvel-creators.component';
import { MarvelEventsComponent } from './page/marvel-events/marvel-events.component';
import { MarvelStoriesComponent } from './page/marvel-stories/marvel-stories.component';
import { SuperheroesComponent } from './page/superheroes/superheroes.component';
import { MarvelCharactersComponent } from './page/marvel-characters/marvel-characters.component';
import { SuperheroEditorComponent } from './page/superhero-editor/superhero-editor.component';
import { MarvelCharacterEditorComponent } from './page/marvel-character-editor/marvel-character-editor.component';
import { MarvelComicEditorComponent } from './page/marvel-comic-editor/marvel-comic-editor.component';
import { MarvelCreatorEditorComponent } from './page/marvel-creator-editor/marvel-creator-editor.component';
import { MarvelEventEditorComponent } from './page/marvel-event-editor/marvel-event-editor.component';
import { MarvelStoryEditorComponent } from './page/marvel-story-editor/marvel-story-editor.component';
import { SuperheroesCardsComponent } from './page/superheroes-cards/superheroes-cards.component';
import { ForbiddenComponent } from './page/forbidden/forbidden.component';
import { LoginComponent } from './page/login/login.component';
import { UserComponent } from './page/user/user.component';
import { UserEditorComponent } from './page/user-editor/user-editor.component';

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
    path: 'users',
    component: UserComponent,
  },
  {
    path: 'superheroes/:id',
    component: SuperheroEditorComponent,
  },
  {
    path: 'marvel-universe/marvel-characters/:id',
    component: MarvelCharacterEditorComponent,
  },
  {
    path: 'marvel-universe/marvel-comics/:id',
    component: MarvelComicEditorComponent,
  },
  {
    path: 'marvel-universe/marvel-creators/:id',
    component: MarvelCreatorEditorComponent,
  },
  {
    path: 'marvel-universe/marvel-events/:id',
    component: MarvelEventEditorComponent,
  },
  {
    path: 'marvel-universe/marvel-stories/:id',
    component: MarvelStoryEditorComponent,
  },
  {
    path: 'users/:id',
    component: UserEditorComponent,
  },
  {
    path: 'superheroes-cards',
    component: SuperheroesCardsComponent,
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
