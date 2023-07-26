/* eslint-disable */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  baseUrl: string = 'http://127.0.0.1:8080/api/data'

  headers = new HttpHeaders()
  constructor(private http: HttpClient) { 

  }

  sendPost(body: FormData): Observable<string> {
    return this.http.post(`${this.baseUrl}/training`, body ,{responseType: 'text'});
  }
}
