import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './UserControls/commonLayout/common-layout.component';
import { NoLayoutComponent } from './UserControls/commonLayout/no-layout.component';
import { LoginComponent} from './Login/Login.component';
import { LoginxxxComponent} from './Login/Loginxxx.component';
import { ChangePasswordComponent} from './Login/changepassword.component';
import { ForgotPasswordComponent} from './Login/forgotpassword.component';
import { dashboardComponent} from './admin/dashboard.component';
import { student_registrationComponent} from './admin/student_registration.component';
import { registrationComponent} from './Registration/registration.component';
import { MyProfileComponent} from './admin/myprofile.component';


const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    children: [
      {path:'changepassword',component:ChangePasswordComponent},
      {path:'dashboard',component:dashboardComponent},
      {path:'student_registration',component:student_registrationComponent},
      {path:'myprofile',component:MyProfileComponent}
    ]
  },
  {
    path: '',
    component: NoLayoutComponent,
    children: [
      {path:'',component:LoginxxxComponent},//set by default page
      {path:'Loginxxx',component:LoginxxxComponent}, 
      {path:'forgotpassword',component:ForgotPasswordComponent},
    ]
  }
];


// const routes: Routes = [
// {path:'',component:LoginComponent},//set by default page
// {path:'Login',component:LoginComponent},
// {path:'dashboard',component:dashboardComponent},
// {path:'student_registration',component:student_registrationComponent},
// {path:'registration',component:registrationComponent},
// {path:'myprofile',component:MyProfileComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
