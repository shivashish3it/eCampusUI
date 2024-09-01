import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConsumeAPIService {

  constructor(private http: HttpClient,public router:Router) { }
  
  private readonly BaseURI = 'https://localhost:7145';
  
  GetAllCountries() {
    return this.http.get(this.BaseURI + '/api/Employee/GetCountry');
  }  
  Login(credentials: any) {
  //console.log(body);
    return this.http.post(this.BaseURI + '/api/eCampus/Login', credentials);
  }

  GetMyProfile(token: string, Id:any) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(this.BaseURI + '/api/Employee/GetMyProfile/'+Id,  { headers });
  }
}
