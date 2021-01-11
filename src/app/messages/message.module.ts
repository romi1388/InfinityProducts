import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {MessagesComponent} from "./messages.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'messages',
        component: MessagesComponent,
        outlet: 'popup'
      }
    ])
  ]
})
export class MessageModule { }
