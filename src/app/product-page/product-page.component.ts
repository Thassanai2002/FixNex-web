import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  public name!: string;
  product = {
    name: 'Optimum Nutrition Whey Protein Gold 5 LBS',
    price: 2800,
    stock: 20,
    quantity: 1,
    
    imageUrl: 'path/to/main-image.jpg',
    thumbnailUrls: [
      'path/to/thumb1.jpg',
      'path/to/thumb2.jpg',
      'path/to/thumb3.jpg'
    ]
  };
  product_data: any;

  incrementQuantity() {
    this.product.quantity++;
  }

  decrementQuantity() {
    if (this.product.quantity > 1) {
      this.product.quantity--;
    }
  }
}
