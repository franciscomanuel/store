import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  exports: [
    BannerComponent
  ],
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule {}
