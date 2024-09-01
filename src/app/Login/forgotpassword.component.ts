import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeAPIService } from '../SharedResources/consume-api.service';

@Component({
    selector: 'forgot-password',
    templateUrl: './forgotpassword.component.html'
  })

  export class ForgotPasswordComponent implements OnInit {
    credentials = { username: '', password: '' };
    constructor(private router: Router,public consumeAPI: ConsumeAPIService) { 
    }
    ngOnInit(){
    }
}