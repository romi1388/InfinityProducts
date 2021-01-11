import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CriteriaComponent } from './shared/criteria/criteria.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductModule } from './products/product.module';
import {FormsModule} from "@angular/forms";
import {UserModule} from "./user/user.module";
import {MessageModule} from "./messages/message.module";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {ProductData} from "./products/product-data";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CriteriaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    FormsModule,
    ProductModule,
    UserModule,
    MessageModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
