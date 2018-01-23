import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import {SecureZoneComponent} from './secure-zone/secure-zone.component';
import {AuthGuard} from './_guards/auth/auth.guard';


const AppRoutes: Routes = [
   { path: 'secureZoneComponent', component: SecureZoneComponent , canActivate: [AuthGuard]},
   { path: '', redirectTo: 'landingPage', pathMatch: 'full' },
  //  { path: 'secureZoneComponent', component: SecureZoneComponent },
  // otherwise redirect to home
    { path: 'landingPage', component: LandingPageComponent }

];

export const AppRouting = RouterModule.forRoot(AppRoutes);
