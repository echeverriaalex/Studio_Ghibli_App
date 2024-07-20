import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { ViewMovieComponent } from './components/view-movie/view-movie.component';

const routes: Routes = [
  {path:'list', component: ListMoviesComponent},
  {path:'list:id', component: ViewMovieComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
