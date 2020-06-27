import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../../../product.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.url_api}/products/`);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.url_api}/products`, product);
  }

  updateProduct(changes: Partial<Product>, id: string): Observable<Product> {
    return this.http.put<Product>(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
