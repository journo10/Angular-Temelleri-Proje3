import { Product } from './../product.model';
import { ProductRepository } from './../repository.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products: any;
  model: ProductRepository;
  selectedProduct:any | Product;
 

  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts1();
  }

  ngOnInit(): void {}

  getSelected(product: Product): boolean {
    return product ==this.selectedProduct;
  }

  editProduct(product:Product){
      this.selectedProduct=product;
  }
}
