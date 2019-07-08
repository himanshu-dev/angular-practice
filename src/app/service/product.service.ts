import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ProductModel} from '../model/product.model';

@Injectable()
export class ProductService {
  private subject = new Subject<ProductModel>();
  @Output() public emitter = new EventEmitter<ProductModel>();

  sendProduct(product: ProductModel) {
    this.subject.next(product);
  }

  getProduct(): Observable<ProductModel> {
    return this.subject.asObservable();
  }

  clearProducts() {
    this.subject.next();
  }
}
