import {Component, OnInit, ViewChild} from '@angular/core';
import { ProductsService } from '../../../../modules/core/services/products/products.service';
import {MatTable} from '@angular/material/table';
import {Product} from '../../../../product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(resp => {
      if (resp === false) {
        console.log('Error, no se ha podido eliminar el producto');
      } else {
        const index = this.products.findIndex(prod => prod.id === id);
        this.products.splice(index, 1);
        this.products = [...this.products];
      }
    });
  }

}
