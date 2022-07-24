import { Component, Input, OnInit } from '@angular/core';
import { PRICE_LIST, Product, ProductWithPrice, PRODUCT_LIST } from '../data';

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
    var productWithPriceObjList:  ProductWithPrice[] =[];
    var productWithOutPriceObjList:  ProductWithPrice[] =[];

    products.forEach(x => {
      var priceObj = prices.find(y => y.sku == x.sku)
      if(priceObj != null){
        var match = {
          sku: x.sku,
          name: x.name,
          image: x.image,
          price: priceObj.price,
          discount: priceObj.discount,
        }
        productWithPriceObjList.push(match);
      }
    })

    // TODO: Filter out products where the price is zero or missing
    productWithPriceObjList.forEach(x => {
      if(x.price != 0 || x.price == undefined){
        productWithOutPriceObjList.push(x)
      }
    })

    return productWithOutPriceObjList;
  }

  addProductToCart(product: ProductWithPrice) {
    this.cart.products.push(product);
    this.cart.total = product.price;
  }
}
