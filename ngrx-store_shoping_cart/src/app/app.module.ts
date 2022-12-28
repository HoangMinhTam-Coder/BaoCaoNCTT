import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer, metaReducerLocalStorage } from './cart-state-store/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopCartComponent,
    ShopProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cartEntries: cartReducer}, { metaReducers: [ metaReducerLocalStorage ]})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
