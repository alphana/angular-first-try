import { Component , TemplateRef } from '@angular/core';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent{

  constructor(private router: Router) {}



  showLoginDialog( loginDialog: LoginDialogComponent) {
    loginDialog.show();
  }
}


