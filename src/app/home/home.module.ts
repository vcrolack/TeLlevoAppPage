import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
