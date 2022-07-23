import { Component, Input, OnInit } from '@angular/core';
import { PRICE_LIST, ProductWithPrice, PRODUCT_LIST } from '../data';

@Component({
  selector: 'app-page-marketing',
  templateUrl: './page-marketing.component.html',
  styleUrls: ['./page-marketing.component.scss'],
})
export class PageMarketingComponent implements OnInit {
  products = this.getProductsAndPrices();

  cart: any;

  constructor() {}

  ngOnInit() {
    this.cart.products = [];
    this.cart.total = 0;
  }

  getProductsAndPrices(): ProductWithPrice[] {
    const products = PRODUCT_LIST;
    const prices = PRICE_LIST;

    // TODO: Merge products and prices.
    // TODO: Filter out products where the price is zero or missing

    // Dummy data.  Replace with the merged products and prices above.
    return [
      {
        sku: 1,
        name: 'Graphs and Charts',
        image: 'https://freesvg.org/img/Performance-Graph.png',
        discount: 0,
        price: 500,
      },
    ];
  }

  addProductToCart(product: ProductWithPrice) {
    this.cart.products.push(product);
    this.cart.total = product.price;
  }
}
