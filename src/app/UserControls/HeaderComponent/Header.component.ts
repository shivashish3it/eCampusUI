import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component
  ({
    // selector: 'Form_Header',
    selector: 'app-header',
    templateUrl: './Header.component.html',
    //styleUrls: ['../../../assets/content/bootstrap/css/bootstrap.min.css','../../../assets/content/plugins/datatables/dataTables.bootstrap.css','../../../assets/content/dist/css/AdminLTE.min.css']
template: `<nav>Header</nav>`
  })
export class HeaderComponent implements OnInit {
  Name: string | null = '';
  imgPath:any;
  constructor(private router: Router) { 
  }
  ngOnInit() {
    //this.cdr.detectChanges();
    //this.router.navigate(['dashboard']);
    if(localStorage.getItem("userName") === null && localStorage.getItem("Token") === null){   
      this.router.navigate(['Login']);
    }
    else if(localStorage.getItem("userName") !== null && localStorage.getItem("Token") !== null){
    //alert('Header = '+localStorage.getItem("name"));
      this.Name = localStorage.getItem("name");
      this.imgPath = localStorage.getItem("imageUrl");
      //alert(this.imgPath);
      //$('#EmpImage').attr('src', response.ResponseData[0].ImageUrl);
    }
  }
  onbtnSignout() {  
    window.localStorage.clear();
    localStorage.clear();
    localStorage.removeItem('userName');
    localStorage.removeItem('Token');
    //this.Name = null;
    //this.router.navigate(['/Login']);
    this.router.navigate(['Loginxxx'])
                  .then(() => {
                    window.location.reload();
                  });
    //return false;
  }  
}