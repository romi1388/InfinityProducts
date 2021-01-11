import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";

const ROUTES = [
  {path:'login', component: LoginComponent}
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class UserModule { }
