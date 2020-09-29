import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
/*import { JwtHelperService } from '@auth0/angular-jwt';*/

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private http: HttpClient) {} /*public jwtHelper: JwtHelperService*/

  login(email: string, password: string) {
    return this.http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`)
    .pipe(map((data: any) => {
      localStorage.setItem('email', email);
      localStorage.setItem('token', data.request_token);
    }));
  }

}

/*
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

*/
