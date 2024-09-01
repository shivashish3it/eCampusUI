import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent} from './Login/Login.component';//To put Link on the page.
import { LoginxxxComponent} from './Login/Loginxxx.component';//To put Link on the page.
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './UserControls/HeaderComponent/Header.component';
import { LeftSideBarComponent } from './UserControls/LeftSideBarComponent/LeftSideBar.component';
import { FooterComponent } from './UserControls/FooterComponent/Footer.component';
import { CommonLayoutComponent } from './UserControls/commonLayout/common-layout.component';
import { NoLayoutComponent } from './UserControls/commonLayout/no-layout.component';

//import { dashboardComponent} from './admin/dashboard.component';
//import { student_registrationComponent} from './admin/student_registration.component';
import { registrationComponent} from './Registration/registration.component';
//import { MyProfileComponent} from './admin/myprofile.component';
import { NgSelectModule } from '@ng-select/ng-select';

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSideBarComponent,
    //dashboardComponent,
    FooterComponent,
    CommonLayoutComponent,
    NoLayoutComponent,
    registrationComponent,
    LoginComponent,
    LoginxxxComponent
    //MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,//for dropdown List
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // DataTablesModule,
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
