import { Product } from './../product.model';
import { ProductRepository } from './../repository.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent implements OnInit {
  model: ProductRepository = new ProductRepository();

  newProduct: Product = new Product();

  constructor() {}

  ngOnInit(): void {}

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log('Form eklendi.' + this.jsonProduct);
  }

  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  getValidationErrors(state: any) {
    let ctrlName: string = state.name;
    let messages: string[] = [];

    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case 'required':
            messages.push('Bu alan zorunludur. + ${ctrlName}'); //Burada bektik işareti olacak sonra uygula
            break;

          case 'minlength':
            messages.push('En az 3 karakter girin.+ ${ctrlName}'); //Burada bektik işareti olacak sonra uygula
            break;

          case 'pattern':
            messages.push('Geçersiz karakter girdiniz.+ ${ctrlName}'); //Burada bektik işareti olacak sonra uygula
            break;
        }
      }
    }
    return messages;
  }
}
