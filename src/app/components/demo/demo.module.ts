import {NgModule} from '@angular/core';
import {DemoComponent} from './components/demo.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../modules/shared/shared.module';
import {DemoRoutingModule} from './demo-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule{}
