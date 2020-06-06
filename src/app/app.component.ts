import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';

  items = ['Nombre 1', 'Nombre 2', 'Nombre 3'];

  power = 10;

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
  addItem(value): void {
    this.items.push(value);
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
  clickProduct(id: number): void {
    console.log(id);
  }
}
