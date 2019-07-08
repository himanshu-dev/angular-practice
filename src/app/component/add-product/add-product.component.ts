import {Component, EventEmitter, Output} from '@angular/core';
import {ProductModel} from '../../model/product.model';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.html'
})
export class AddProductComponent {
  product: ProductModel = {};
  @Output() onProductAdded = new EventEmitter<ProductModel>();

  constructor(public productService: ProductService) {
  }

  addProduct() {
    this.onProductAdded.emit(this.product);
  }

  addProduct2() {
    this.productService.sendProduct(this.product);
  }

  clearProducts() {
    this.productService.clearProducts();
  }

  addProduct3() {
    this.productService.emitter.emit(this.product);
  }
}
