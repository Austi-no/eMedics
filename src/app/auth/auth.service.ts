import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL: string = 'http://51.141.48.145:65521/';

  apiKey: string = '603a967527684be39ad7633275a1abba';

  constructor(private http: HttpClient) {}

  createAccount(value: any): any {
    // let headers = new HttpHeaders({ 'Api-Key': this.apiKey });

    return this.http.post(this.baseURL + 'CreateAccount', value);
  }

  login(loginData: any): any {
    let headers = new HttpHeaders({ 'Api-Key': this.apiKey });
    return this.http.post(this.baseURL + 'SignIn', loginData, {
      headers: headers,
    });
  }
  getRegistrationTypes(): any {
    return registrationTypes;
  }
}
let registrationTypes: any = [
  {
    id: 0,
    description: 'Patient',
  },
  {
    id: 1,
    description: 'Medical Professional',
  },
  {
    id: 2,
    description: 'Medical Center',
  },
];
