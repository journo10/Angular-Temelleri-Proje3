import { HttpComponent } from './http/http.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path:'admin-product',component:AdminProductsComponent},
  {path:'template-forms',component:TemplateFormsComponent},
  {path:'reactive-forms',component:ReactiveFormsComponent},
  {path:'http',component:HttpComponent},
  {path:'**',component:ProductComponent},
  { path: '', redirectTo: 'product', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [	
    
   ],
})
export class AppRoutingModule {}
