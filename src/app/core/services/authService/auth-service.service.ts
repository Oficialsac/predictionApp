/* eslint-disable */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../schemas/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private baseUrl: string = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  login(body: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/user`, body);
  }

  signin(body: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, body);
  }

}
