import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    description: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    imageUrl: new FormControl('',Validators.required),
  });

  get name(){
   return this.productForm.get('name');
  }

  onSubmit(){
     console.log(this.productForm.value); 
  }

  updateForm(){
    this.productForm.patchValue({
      name:'Casper 5',
      price:5000,
    })
  }

  constructor() {}

  ngOnInit(): void {}
}
