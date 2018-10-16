import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnterDetailsGuardService } from './phone-details/enter-details-guard.service';
import { AddPhoneComponent } from './add-phone/add-phone.component';
export const routes: Routes = [
    { path: '', component: DashboardComponent },
   
   // {
   //     path: 'dashboard',
    //    component: DashboardComponent,
     //   canActivate: [ EnterDetailsGuardService ]
   // },
    /*
    {
        path: 'phone/:id',
        component: PhoneDetailsComponent,
        canActivate: [ EnterDetailsGuardService ],
        resolve: {
            phone: ResolveDetailsGuardService
         }
    },
    */
   {
    path: 'reserve/:id',
    component: AddPhoneComponent,
    //canActivate: [ EnterDetailsGuardService ],
    //resolve: {
     //   phone: ResolveDetailsGuardService
     //}
    },
    { path: '**', redirectTo: '' }
];