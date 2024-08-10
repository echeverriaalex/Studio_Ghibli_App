import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error404/error404.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    NavBarComponent,
    Error404Component,
  ]
})
export class SharedModule {}