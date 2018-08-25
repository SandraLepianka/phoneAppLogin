import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { EnterDetailsGuardService } from './phone-details/enter-details-guard.service';
import { LeaveAddPhoneGuardService } from './add-phone/leave-add-phone-guard.service';
import { ResolveDetailsGuardService } from './phone-details/resolve-details-guard.service';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'add',
        component: AddPhoneComponent,
        canDeactivate: [ LeaveAddPhoneGuardService ]
    },
    {
        path: 'list',
        component: PhoneListComponent,
        canActivate: [ EnterDetailsGuardService ]
    },
    {
        path: 'phone/:id',
        component: PhoneDetailsComponent,
        canActivate: [ EnterDetailsGuardService ],
        resolve: {
            phone: ResolveDetailsGuardService
         }
    },
    { path: '**', redirectTo: '' }
];