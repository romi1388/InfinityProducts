import {NgModule} from '@angular/core';
import {ProductsComponent} from "./products.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./product-detail.guard";
import {SharedModule} from '../shared/shared.module';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductResolver} from "./product-resolver.service";
import { ProductEditTagsComponent } from './product-edit/product-edit-tags/product-edit-tags.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info/product-edit-info.component';

const ROUTES = [
  {path: 'products', component: ProductsComponent},
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent,
    resolve: {resolvedData: ProductResolver}
  },
  {path: 'products/:id/edit',
    component: ProductEditComponent,
    resolve: {resolvedData: ProductResolver},
    children: [
      {path: '',redirectTo:'info', pathMatch: 'full'},
      {path: 'info', component: ProductEditInfoComponent},
      {path: 'tags', component: ProductEditTagsComponent}
    ]
  },
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductEditTagsComponent,
    ProductEditInfoComponent,
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule
  ]
})
export class ProductModule {
}
