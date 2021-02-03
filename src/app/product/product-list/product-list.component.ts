import { Component, OnInit } from '@angular/core';
import { products } from '../../product';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    const productsObservable = this.productService.getProducts();
    productsObservable.subscribe(
      (data) => {
        this.products = data;
    },
      (err) => {console.error('something wrong occured ' + err);},
      () => {console.log('done');}
    );
//     this.products = this.productService.getProducts();

//     const observable = new Observable(
//       subscriber => {
//         subscriber.next(1);
//         subscriber.next(2);
//         subscriber.next(3);
//         setTimeout(()=>{
//           subscriber.next(4);
//           subscriber.complete();
//         }, 1000);
//       }
//     );
// // debugger
//     console.log('just before subscribe');
//     observable.subscribe({
//       next(x) {console.log('get value' + x);},
//       error(err){
//         console.error('something wrong occured ' + err);
//       },
//       complete(){console.log('done');}
//     });

//     console.log('Just after subscribe');

  }

}
