import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../../modules/core/services/products/products.service';
import {Product} from '../../../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.fecthProducts();
  }

  clickProduct(id: number): void {
    console.log('click');
  }

  fecthProducts() {
    this.productsService.getAllProducts().subscribe(products => this.products = products);
  }

}
