import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../modules/core/services/products/products.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Product} from '../../product.model';

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
      this.product = this.productsService.getProductById(param.id);
      console.log(this.product);
    });
  }

}
