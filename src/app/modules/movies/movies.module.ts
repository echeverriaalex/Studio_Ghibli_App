import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { ViewMovieComponent } from './components/view-movie/view-movie.component';


@NgModule({
  declarations: [
    ListMoviesComponent,
    ViewMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
