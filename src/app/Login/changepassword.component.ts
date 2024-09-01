import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumeAPIService } from '../SharedResources/consume-api.service';

@Component({
    selector: 'changepassword',
    templateUrl: './changepassword.component.html'
  })

  export class ChangePasswordComponent implements OnInit {
    credentials = { username: '', password: '' };
    constructor(private router: Router,public consumeAPI: ConsumeAPIService) { 
    }
    ngOnInit(){
    }
}