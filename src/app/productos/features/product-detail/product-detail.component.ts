import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``
})
export default class ProductDetailComponent {
  constructor() {
    // Initialization logic can go here
  }

  initializeComponent() {
    // Component initialization logic
    console.log('ProductDetailComponent initialized');

  }
}
