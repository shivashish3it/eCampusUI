import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeAPIService } from '../SharedResources/consume-api.service';

@Component({
    selector: 'myprofile',
    templateUrl: './myprofile.component.html'
  })

  export class MyProfileComponent implements OnInit {
    employeeID: any;
    //var isEmployee;
    constructor(private router: Router,public consumeAPI: ConsumeAPIService) { 
}  
    ngOnInit(){
        var Id; let token = null;
        if (localStorage.getItem("userName") !== null){
            Id = localStorage.getItem("userName");
       ///alert(Id);
    }

if (localStorage.getItem("Token") !== null) {
     token = localStorage.getItem("Token");  
    //alert(token);             
}
    this.GetMyProfile(token,Id);
} 
    
    GetMyProfile(token:any,Id:any) {
        this.consumeAPI.GetMyProfile(token,Id).subscribe(
          (res: any) => {
            console.log(res.ResponseData);
            //alert(res.ResponseData.length);
            if (res.ResponseData.length > 0) {
              //alert('Hi');
              if(res.StatusCode == 200){
                  //alert(res.StatusCode);
                  var isEmployee = res.ResponseData[0].IsEmployee;
                  //alert('isEmployee = '+isEmployee);
                  var isStudent = res.ResponseData[0].IsStudent;
                  //alert(isStudent);
                 
  
    if (isEmployee) {
        this.employeeID = res.ResponseData[0].EmployeeID;
        //alert(this.employeeID);
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
            if (err.status == 401) {
              //this.errorresmes = err.error.errmessage;
              alert('401 Unauthorized');
            }
            // else if (err.status == 400) {
            //   this.errorresmes = err.error.errmessage;
            // }
            // else {
            //   this.errorresmes = "Roll No. not found";
            // }
          });  
      }
}
  