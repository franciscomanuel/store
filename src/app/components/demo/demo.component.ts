import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'store';

  items = ['Nombre 1', 'Nombre 2', 'Nombre 3'];

  power = 10;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(value): void {
    this.items.push(value);
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

}
