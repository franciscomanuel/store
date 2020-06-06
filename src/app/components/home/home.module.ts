import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared/shared.module';

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
    CommonModule,
    SharedModule
  ]
})
export class HomeModule {}
