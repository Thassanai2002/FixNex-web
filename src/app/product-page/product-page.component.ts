import { Component } from '@angular/core';
import { StateDataInterface } from '../shared/interfaces/interfaceAll';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  public name!: string;
  state = {} as StateDataInterface<any>;
  product_data: any;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) {
    window.scrollTo(0, 0);
    this.route.queryParams.forEach(() => {
      this.state =
        (this.router.getCurrentNavigation()?.extras
          ?.state as StateDataInterface<any>) ||
        ({} as StateDataInterface<any>);
    });
  }

  ngOnInit() {
    console.log(this.state.data);
    this.productService.getProfile(this.state.data).subscribe((data) => {
      if (data) {
        this.product.imageUrl = this.state.src;
        this.product.name = data.product_name;
        this.product.price = data.unit_price;
        this.product.stock = data.stock_quantity;
        this.product_data = data;
        this.state.data = data;
        console.log(this.product_data);
        console.log(this.state);
      }
    })
  }

  product = {
    name: 'Optimum Nutrition Whey Protein Gold 5 LBS',
    price: 2800,
    stock: 20,
    quantity: 1,
    imageUrl: '',
  };

  incrementQuantity() {
    this.product.quantity++;
  }

  decrementQuantity() {
    if (this.product.quantity > 1) {
      this.product.quantity--;
    }
  }

  goPayment () {
    this.state.data.quantity = this.product.quantity;
    console.log(this.state);
    this.router.navigate(['/payment'], { state: this.state });
  }
}
