import { Component } from '@angular/core';
import {Router } from "@angular/router";
import { AuthService } from './user/auth.service';
import {MessageService} from "./messages/message.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Infinity Products';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService, private router: Router, public messageService: MessageService) {
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home')
  }
  hideMessages() :void {
    this.messageService.isDisplayed = false;
}

  displayMessages() : void {
    this.router.navigate([{outlets:{popup: ['messages']}}]);
    this.messageService.isDisplayed = true;

  }
}
