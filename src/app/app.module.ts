import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CardsComponent } from './components/cards/cards.component';
import { DemoComponent } from './components/demo/demo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeModule } from './components/home/home.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CardsComponent,
    DemoComponent,
    PageNotFoundComponent,
    LayoutComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  exports: [
    ProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
