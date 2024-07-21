import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { ViewMovieComponent } from './components/view-movie/view-movie.component';
import { ImgMovieComponent } from './components/img-movie/img-movie.component';
import { Error404Component } from 'src/app/shared/error404/error404.component';

const routes: Routes = [
  {path:'list', pathMatch: 'full', component: ListMoviesComponent},
  {path:'list:id', component: ViewMovieComponent},
  {path:'img', pathMatch: 'full', component: ImgMovieComponent},
  {path:'', pathMatch: 'full', component: ListMoviesComponent},
  {path:'**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
