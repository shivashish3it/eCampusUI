import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeAPIService } from '../SharedResources/consume-api.service';

function Hello() {
  alert('Hello!');
}

@Component({
    selector: 'Login',
    templateUrl: './Login.component.html'
  })

  export class LoginComponent implements OnInit {
    credentials = { username: '', password: '' };
    constructor(private router: Router,public consumeAPI: ConsumeAPIService) { 
    }
    submitted = false;   
    ngOnInit(){

    }
    onbtnSubmit() {  
      this.Login();
    }  
    
    onbtnRegister() {  
      this.router.navigate(['/registration']);
    }  
    Login() {
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
}
  
  