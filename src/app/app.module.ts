import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router'
import {HttpModule} from '@angular/http';
import { ProductComponent } from './product/product.component'
import { FormsModule }   from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"product",component:ProductComponent},
      {path:"updateProduct/:id",component:UpdateProductComponent}
    ]),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
