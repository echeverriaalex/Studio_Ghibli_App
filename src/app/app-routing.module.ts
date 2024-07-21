import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  
  {path:'movies', loadChildren: ()=> import('./modules/movies/movies.module').then(m => m.MoviesModule)},
  {path: '', component: HomePageComponent},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
