import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeAPIService } from '../SharedResources/consume-api.service';
// import * as $ from 'jquery';
//import { Component, ViewChild } from '@angular/core';


@Component({
    selector: 'Loginxxx',
    templateUrl: './Loginxxx.component.html',
    // "styles": ["./assets/content/css/jquery-confirm.min.css"]
// styleUrls: ['/src/assets/content/css/jquery-confirm.min.css']
  })
  

  export class LoginxxxComponent implements OnInit {
  UserName: string="";
  Password: any;
    credentials = { username: '', password: '' };
    constructor(private router: Router,public consumeAPI: ConsumeAPIService) { 
  }
    ngOnInit(){
    }
    onbtnLogin() {  
      this.Login();
    }  

    Login() {
      var userName = this.credentials.username;
      var password = this.credentials.password;
      if(userName == "" || userName == null)
      {
        alert("Enter User Name");
        return;
      }
      if(password == "" || password == null)
      {
        //alert("Enter Password");
        //($ as any).confirm();
      //   $.confirm({
      //     icon: 'fa fa-warning',
      //     title: 'Warning !',                 
      //     theme: 'bootstrap',
      //     content: 'Enter User Name / Password !',
      //     type:'red',
      //     closeIcon: true,                 
      //     buttons: {Ok: {text: 'Ok', btnClass: 'btn-orange'},
      //     }
      // });
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

    onDialogOk() {
      // Handle the OK action from the dialog, if necessary
      console.log('Dialog OK clicked');
    }
}