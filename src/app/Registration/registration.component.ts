import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeAPIService } from '../SharedResources/consume-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
function hello() {
  alert('Hello!!!');
}

// function MessageBox(){
//   $.confirm({ icon: 'fa fa-check-circle', title: 'Success !', theme: 'bootstrap', content: 'Updated Successfully !', type: 'green', closeIcon: true, buttons: { Ok: { text: 'Ok', btnClass: 'btn-orange', }, } });
// }

@Component({
    selector: 'registration',
    templateUrl: './registration.component.html'
  })

  export class registrationComponent implements OnInit {
  FirstName: string="";
  LastName:string="";
  Password: any;
  ConfirmPassword: any;
  //passwordForm!: FormGroup;
  passwordForm!: FormGroup;
  errorres: any;
  successData: any;
  successmsg: any;
  errorresmes: any;
  public countries: any[] = [];
  constructor(private fb: FormBuilder,private router: Router,public consumeAPI: ConsumeAPIService) {   
    }
    submitted = false;   
    ngOnInit(){
      this.passwordForm = this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(6)]],
        ConfirmPassword: ['', Validators.required]
      }, 
      { validator: this.passwordMatchValidator });


      this.GetAllCountries();
    }

    passwordMatchValidator(form: FormGroup) {
      const password = form.get('Password')?.value;
      const confirmPassword = form.get('ConfirmPassword')?.value;
      return password === confirmPassword ? null : { mismatch: true };
    }

    onbtnSubmit(){
     var firstName = this.FirstName;
     //alert(firstName+' '+this.LastName);
     var password = this.Password;
     //alert(password);
     alert('Password = '+password);
     var confirmPassword = this.ConfirmPassword;
     alert('Confirm Password = '+confirmPassword);
     if(password !== confirmPassword){
    //if(password.includes(confirmPassword)){
      alert('Password & Confirm Password not match!');
      return;
     }
      // if (this.passwordForm.valid) {
      //   // Handle the form submission
      //   console.log('Form Submitted', this.passwordForm.value);
      // }
    }
    onbtnLogin() {  
      this.router.navigate(['/Login']);
    }  
    
    GetAllCountries() {
      this.consumeAPI.GetAllCountries().subscribe(
        (res: any) => {
          console.log(res.ResponseData);
          //alert(res.ResponseData);
          this.countries=res.ResponseData; 
        },
        err => {
          this.successData = false;
          this.errorres = true;
          if (err.status == 401) {
            this.errorresmes = err.error.errmessage;
          }
          else if (err.status == 400) {
            this.errorresmes = err.error.errmessage;
          }
          else {
            this.errorresmes = "Roll No. not found";
          }
        });  
    }
}
  
  