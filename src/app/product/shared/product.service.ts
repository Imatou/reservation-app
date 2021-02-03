import { Injectable } from "@angular/core";
import { products } from "src/app/product";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient){

  }

  getProducts(): Observable<any>{
    return this.http.get('/apl/v1/products');
    // return products;
  }

  getProductById(productId: string): Observable<any>{
    

    return this.http.get('/apl/v1/products/' + productId);
    // return products[productId as keyof typeof products];
    // return products[productId];
  }
}