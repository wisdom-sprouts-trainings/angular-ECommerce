import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RecipeStartComponent } from './recipe-list/recipe-start/recipe-start.component';
import { AppRoutingModule } from './app-routing.model';
import { ProductServices } from './product.service';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainScreenComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    RecipeStartComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
    
  ],
  providers: [ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
