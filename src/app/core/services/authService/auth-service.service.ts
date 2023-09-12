/* eslint-disable */
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../schemas/user/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl: string = 'http://127.0.0.1:8080/api/auth'

  constructor(private http: HttpClient) { }

  updateUser(body: User): Observable<any> { 
    return this.http.put(this.baseUrl,body)
  }

  getAllUsers(): Observable<any> {
    return this.http.get("http://127.0.0.1:8080/api/auth/users")
  }

  login(body: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, body);
  }

  signin(body: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, body);
  }

}
