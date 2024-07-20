import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {
    path:'movies', 
    loadChildren: ()=> import('./modules/movies/movies.module').then(m => m.MoviesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
