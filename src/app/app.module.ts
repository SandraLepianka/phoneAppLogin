import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { HttpModule } from '@angular/http';
import { FileUploadModule } from "ng2-file-upload";
import { FormsModule } from "@angular/forms";


import { RestaurantService} from './services/restaurant.service';
import { SessionService } from "./services/session.service";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddPhoneComponent,
    RestaurantComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [RestaurantService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
