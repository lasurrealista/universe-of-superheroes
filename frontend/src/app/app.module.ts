import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HomeComponent } from './page/home/home.component';
import { SuperheroesComponent } from './page/superheroes/superheroes.component';
import { DataTableComponent } from './common/data-table/data-table.component';
import { XPipePipe } from './pipe/x-pipe.pipe';
import { MarvelCharactersComponent } from './page/marvel-characters/marvel-characters.component';
import { MarvelComicsComponent } from './page/marvel-comics/marvel-comics.component';
import { MarvelStoriesComponent } from './page/marvel-stories/marvel-stories.component';
import { MarvelEventsComponent } from './page/marvel-events/marvel-events.component';
import { MarvelCreatorsComponent } from './page/marvel-creators/marvel-creators.component';
import { FooterComponent } from './common/footer/footer.component';
import { SuperheroEditorComponent } from './page/superhero-editor/superhero-editor.component';
import { MarvelStoryEditorComponent } from './page/marvel-story-editor/marvel-story-editor.component';
import { MarvelEventEditorComponent } from './page/marvel-event-editor/marvel-event-editor.component';
import { MarvelCreatorEditorComponent } from './page/marvel-creator-editor/marvel-creator-editor.component';
import { MarvelComicEditorComponent } from './page/marvel-comic-editor/marvel-comic-editor.component';
import { MarvelCharacterEditorComponent } from './page/marvel-character-editor/marvel-character-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SuperheroesComponent,
    DataTableComponent,
    XPipePipe,
    MarvelCharactersComponent,
    MarvelComicsComponent,
    MarvelStoriesComponent,
    MarvelEventsComponent,
    MarvelCreatorsComponent,
    FooterComponent,
    SuperheroEditorComponent,
    MarvelStoryEditorComponent,
    MarvelEventEditorComponent,
    MarvelCreatorEditorComponent,
    MarvelComicEditorComponent,
    MarvelCharacterEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
