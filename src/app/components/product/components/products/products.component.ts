import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../../modules/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
  }

  clickProduct(id: number): void {
    console.log(id);
  }

}
