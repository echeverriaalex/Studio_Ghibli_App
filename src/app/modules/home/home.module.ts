import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterLink, RouterModule } from '@angular/router';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
