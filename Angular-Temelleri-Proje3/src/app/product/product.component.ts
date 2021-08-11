import { Product } from './../product.model';
import { ProductRepository } from './../repository.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  disabled = false;

  model: ProductRepository = new ProductRepository();

  product: Product = this.model.getProductById(1);


  //Class Binding
  getClasses(id: number): string {
    let product = this.model.getProductById(id);
    return (product.price <= 1000 ? 'bg-danger' : 'bg-warning') + ' m-2 p-2';
  }

  getClassMap(id: number) {
    let product = this.model.getProductById(id);
    return {
      'bg-success': product.price <= 1000,
      'bg-dark': product.price > 1000,
      'text-center text-white': product.name == 'Samsung S6',
    };
  }

  //Style Binding
  color: string = this.model.getProductById(1).price <= 1000 ? 'yellow' : 'red';
  fontSize: string = '25px';

  getStyles(id: number) {
    let product = this.model.getProductById(id);
    return {
      fontSize: '30px',
      color: product.price <= 1000 ? 'yellow' : 'red',
    };
  }
  //Event Binding
  onSubmit($event: any) {
    $event.stopPropagation(); //div buttonu tıklanmayı engellemek için...
    console.log($event);
    console.log('Button tıklandı.');
  }

  onDivClick() {
    console.log('div button tıklandı.');
  }

  //KeyUp Event
  onKeyUp(email: any) {
    console.log(email);
    console.log('email girildi.');
  }

  //Two Way Binding
  eposta: any = 'b@eposta.com';

  onModel() {
    console.log(this.eposta);
  }

  //Pipes
  today: number = Date.now();
  title: string = 'Angular Kursu';
  students: number = 52476;
  price: number = 547.88;
  completed: number = 0.37;

  //Custom Pipe
  text: string = "Angular javascript'in güzel bir kütüphanesidir.";

  //*ngSwitch (string gelirse)
  productName:string=this.model.getProductById(1).name;

  

  constructor() {}

  ngOnInit(): void {}
}
