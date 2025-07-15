import { Component, input } from '@angular/core';
import { Product } from '../../../shared/interface/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styles: `
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .line-clamp-3 {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    @media (max-width: 374px) {
      .product-card-container {
        min-height: 400px;
      }
    }
    
    @media (min-width: 375px) and (max-width: 640px) {
      .product-card-container {
        min-height: 440px;
      }
    }
    
    @media (min-width: 641px) {
      .product-card-container {
        min-height: 500px;
      }
    }
    
    /* Asegurar que el botón sea visible en móviles */
    @media (max-width: 640px) {
      .mobile-button {
        min-height: 44px;
        font-size: 14px;
      }
    }
  `
})
export class ProductCardComponent {
  product = input.required<Product>();
}
