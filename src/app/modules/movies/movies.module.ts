import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { ViewMovieComponent } from './components/view-movie/view-movie.component';
import { ImgMovieComponent } from './components/img-movie/img-movie.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListMoviesComponent,
    ViewMovieComponent,
    ImgMovieComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
  ]
})
export class MoviesModule { }
