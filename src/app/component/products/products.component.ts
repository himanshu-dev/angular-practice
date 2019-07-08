import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {ProductModel} from '../../model/product.model';
import {ProductService} from '../../service/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styles: [`
    h2 {
      color: red;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated // None, ShadowDom
})
export class ProductsComponent implements OnDestroy {
  subscription: Subscription;
  subscription2: Subscription;
  products: ProductModel[] = [
    {name: 'phone', price: 20000}
  ];

  constructor(public productService: ProductService) {
    this.subscription = productService.getProduct().subscribe((product: ProductModel) => {
      if (!product) {
        this.products = [];
        return;
      }
      this.addProductToArray(product);
    });

    this.subscription2 = productService.emitter.subscribe((product: ProductModel) => {
      if (!product) {
        this.products = [];
        return;
      }
      this.addProductToArray(product);
    });
  }

  addProductToArray(product: ProductModel) {
    this.products.push(product);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
