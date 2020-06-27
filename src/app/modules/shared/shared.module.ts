import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExponencialPipe} from './pipes/exponencial.pipe';
import {HighlightDirective} from './directives/highlight.directive';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [
    ExponencialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    ExponencialPipe,
    HeaderComponent,
    FooterComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
