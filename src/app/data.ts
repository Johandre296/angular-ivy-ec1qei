export interface Product {
  sku: number;
  name: string;
  image: string;
}

export interface Price {
  sku: number;
  price: number;
  discount: number;
}

export interface ProductWithPrice {
  sku: number;
  name: string;
  image: string;
  price: number;
  discount: number;
}

export const PRODUCT_LIST: Product[] = [
  {
    sku: 1,
    name: 'Graphs',
    image: 'https://freesvg.org/img/Performance-Graph.png',
  },
  {
    sku: 2,
    name: 'Contracts',
    image: 'https://freesvg.org/img/1540798457.png',
  },
  {
    sku: 4,
    name: 'Timesheets',
    image: 'https://freesvg.org/img/DooFi-Trash-Bins-3.png',
  },
  {
    sku: 5,
    name: 'CRM Pipeline integrated with 3rd party software',
    image: 'https://freesvg.org/img/DooFi-Trash-Bins-3.png',
  },
  {
    sku: 6,
    name: 'Leave management',
    image: 'https://freesvg.org/img/DooFi-Trash-Bins-3.png',
  },
];

export const PRICE_LIST: Price[] = [
  {
    sku: 1,
    price: 250,
    discount: 0,
  },
  {
    sku: 2,
    price: 0,
    discount: 0,
  },
  {
    sku: 5,
    price: 500,
    discount: 0,
  },
  {
    sku: 6,
    price: 375,
    discount: 0,
  },
];
