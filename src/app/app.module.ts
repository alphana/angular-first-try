import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { AppRouting } from './app.routing';


import { ModalModule } from 'ngx-bootstrap/modal';
import {AuthenticationService} from './_services/services';
import { SecureZoneComponent } from './secure-zone/secure-zone.component';
import {AuthGuard} from './_guards/auth/auth.guard';
import {PeopleService} from './_services/people/people.service';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {GlobalErrorHandler} from './_helpers/global.errorhandler';
import { ErrorDialogComponent } from './common/error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingHeaderComponent,
    LoginDialogComponent,
    SecureZoneComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ModalModule.forRoot(),
    AppRouting
  ],
  providers: [
    AuthenticationService,
    PeopleService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
