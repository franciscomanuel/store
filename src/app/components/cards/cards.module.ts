import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../modules/shared/shared.module';
import { CardsComponent } from './components/cards.component';
import {CardsRoutingModule} from './cards-routing.module';


@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardsRoutingModule
  ]
})
export class CardsModule{}
