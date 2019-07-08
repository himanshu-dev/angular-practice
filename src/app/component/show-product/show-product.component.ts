import {Component, Input} from '@angular/core';
import {ProductModel} from '../../model/product.model';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.html'
})
export class ShowProductComponent {
  @Input() product: ProductModel;
}
