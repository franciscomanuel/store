import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../../../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy{

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter<any>();

  today = new Date();

  constructor() {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges');
  //   console.log(changes);
  // }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
  }

  ngOnDestroy(): void {
  }

  addCart(): void {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }

}
