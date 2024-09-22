import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeAPIService } from '../SharedResources/consume-api.service';

//import { Component, ViewChild } from '@angular/core';
//import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'; 
// declare var $:any;
declare var bootstrap: any; 

@Component({
    selector: 'forgot-password',
    templateUrl: './forgotpassword.component.html'
  })

  export class ForgotPasswordComponent {

credentials = { username: '', password: '' };
    
    constructor(private router: Router,public consumeAPI: ConsumeAPIService) { 
    }
    ngOnInit(){
    }
    onbtnSubmit() {  
      this.Delete();
    }  

    Delete(){
      //alert('Submit button clicked !');
      console.log('Button Clicked !');
        const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
        confirmModal.show();    
          return;       
    }
    confirmDelete() {
      // Close the confirm modal
      const confirmModal = bootstrap.Modal.getInstance(document.getElementById('confirmModal'));
      confirmModal.hide();
  
      // Show the deleted message modal
      const deletedModal = new bootstrap.Modal(document.getElementById('deletedModal'));
      deletedModal.show();
    }
}    