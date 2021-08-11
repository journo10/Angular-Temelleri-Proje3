import { Product } from './product.model';

export class SimpleDataSource {
  private products: Product[];

  constructor() {
    this.products = new Array<Product>(
      new Product(1, 'Samsung S5', 'Güzel bir telefon', '1.jpg', 1000),
      new Product(2, 'Samsung S6', 'Güzel bir telefon', '2.jpg', 2000),
      new Product(3, 'Samsung S7', 'Güzel bir telefon', '3.jpg', 3000),
      new Product(4, 'Samsung S8', 'Güzel bir telefon', '4.jpg', 4000),
      new Product(5, 'Samsung S9', 'Güzel bir telefon', '5.jpg', 5000)
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}
