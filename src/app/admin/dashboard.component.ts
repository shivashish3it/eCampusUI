import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  //styleUrls: ['./src/assets/styles/stylesheet.css'],
  // styleUrls: ['../../assets/styles/stylesheet.css', '../../assets/styles/datepicker3.css', '../../assets/styles/daterangepicker.css'],
  //styleUrls: ['../../assets/styles/stylesheet.css'],
  //providers: [DatePipe]
})

export class dashboardComponent implements OnInit {  
    constructor(private router: Router) { 
    }
    ngOnInit(){
    if(localStorage.getItem("userName") === null && localStorage.getItem("Token") === null)     
          this.router.navigate(['Loginxxx']);
  }
}