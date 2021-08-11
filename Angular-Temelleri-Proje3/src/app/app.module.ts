import { SummaryPipe } from './pipe/summary.pipe';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputEmailDirective } from './input-email.directive';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HttpComponent } from './http/http.component';
import { RouterComponent } from './router/router.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SummaryPipe,
    InputEmailDirective,
    AdminProductsComponent,
    NavbarComponent,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    HttpComponent,
    RouterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
