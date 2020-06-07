import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from './components/product/product.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {SharedModule} from '../../modules/shared/shared.module';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class ProductModule { }
