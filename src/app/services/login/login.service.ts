import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CookiesService } from '../cookies/cookies.service';
import { EnumCookie } from '../cookies/cookie.enum';
import { Login } from '../../shared/interfaces/login';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

  public login(params: Login) : Observable<any> {
    return this.http.post<String>(`dataOn/doClientPanel/login?login=${params.email}&pass=${params.password}`, null);
  }
}
