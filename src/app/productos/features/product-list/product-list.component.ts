import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsStateService]
})
export default class ProductListComponent {

  productStateService = inject(ProductsStateService);

  changePage() {
    const page = this.productStateService.state.page() + 1;
    this.productStateService.changePage$.next(page);
  }
}
