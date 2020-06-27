import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../../modules/core/services/products/products.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Product} from '../../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.fechtProduct(param.id);
    });
  }

  fechtProduct(id: string) {
    this.productsService.getProductById(id).subscribe(product => this.product = product);
  }

  createProduct() {
    const newProduct: Product = {
      id: '11',
      title: 'Nuevo desde Angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo Producto'
    };
    this.productsService.createProduct(newProduct).subscribe(product => console.log(this.product));
  }

}
