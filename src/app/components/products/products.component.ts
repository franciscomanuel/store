import { Component, OnInit } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Descripcion Camiseta'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'Descripcion Hoodie'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'Descripcion Mug'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'Descripcion Pin'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers1',
      price: 80000,
      description: 'Descripcion Stickers1'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers2',
      price: 80000,
      description: 'Descripcion Stickers2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clickProduct(id: number): void {
    console.log(id);
  }

}
