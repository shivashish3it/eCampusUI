//import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeAPIService } from '../SharedResources/consume-api.service';

import { Component, ViewChild } from '@angular/core';
import { PopupModalComponent } from '../popup-modal/popup-modal.component'; // Adjust path as needed

declare var $:any;

@Component({
    selector: 'Loginxxx',
    templateUrl: './Loginxxx.component.html',
styleUrls: ['./Loginxxx.component.css']
  })
  
  export class LoginxxxComponent{
  UserName: string="";
  Password: any;
  credentials = { username: '', password: '' };
  
  @ViewChild('globalModal') globalModal!: PopupModalComponent;
    constructor(private router: Router,public consumeAPI: ConsumeAPIService) { 
  }
    ngOnInit(){
    }
    onbtnLogin() {  
      this.Login();
    }  
    //errorMsg=""
    Login() {
      let message='';
      var userName = this.credentials.username;
      var password = this.credentials.password;
      if(userName == "" || userName == null)
      {
        message="Enter the User Name !";
        this.globalModal.message = message;
         $('#myModal').modal('toggle')     
      //  this.globalModal.open();
        return;
      }
      if(password == "" || password == null)
      {
        //alert("Enter Password");
      message="Enter the Password !";
      this.globalModal.message = message;
      $('#myModal').modal('toggle')
      //this.globalModal.open();
      return;       
      }
      this.consumeAPI.Login(this.credentials).subscribe(
        (res: any) => {
          console.log(res.ResponseData);
          //alert(res.ResponseData.length);
          if (res.ResponseData.length > 0) {
            //alert('Hi');
            if(res.StatusCode == 200){
                //alert(res.StatusCode);
                var isEmployee = res.ResponseData[0].IsEmployee;
                //alert(isEmployee);
                var isStudent = res.ResponseData[0].IsStudent;
                //alert(isStudent);
                var Token = res.ResponseData[0].Access_Token;
                //alert(Token);
                localStorage.setItem("Token", Token); 

                if (isEmployee) {
                  var userName = res.ResponseData[0].UserName;
                  var name = res.ResponseData[0].Name;                           
                  var imageUrl = res.ResponseData[0].ImageUrl;
                  localStorage.setItem("userName", userName);
                  localStorage.setItem("name", name);
                  localStorage.setItem("imageUrl", imageUrl);  
                  //this.router.navigate(['dashboard']);
                  this.router.navigate(['dashboard'])
                  .then(() => {
                    window.location.reload();
                  });
                  //location.href = 'dashboard';
              } 
              if (isStudent) {
                var userName = res.ResponseData[0].UserName;
                var name = res.ResponseData[0].Name;
                var imageUrl = res.ResponseData[0].ImageUrl;
                localStorage.setItem("userName", userName);
                localStorage.setItem("name", name);
                localStorage.setItem("imageUrl", imageUrl);
                //this.router.navigate(['student_registration']);
                this.router.navigate(['student_registration'])
                  .then(() => {
                    window.location.reload();
                  });
            }              
          }           
       }
          else{
            alert(res.StatusCode);
            this.router.navigate(['Login']);
          }
        },
        err => {
          // this.successData = false;
          // this.errorres = true;
          // if (err.status == 401) {
          //   this.errorresmes = err.error.errmessage;
          // }
          // else if (err.status == 400) {
          //   this.errorresmes = err.error.errmessage;
          // }
          // else {
          //   this.errorresmes = "Roll No. not found";
          // }
        });  
    }

    onbtnForgotPwd() {  
      this.router.navigate(['/forgotpassword']);
    }  

    // onDialogOk() {
    //   // Handle the OK action from the dialog, if necessary
    //   console.log('Dialog OK clicked');
    // }
}            