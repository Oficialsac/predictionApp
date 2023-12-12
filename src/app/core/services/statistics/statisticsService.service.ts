/* eslint-disable */
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Opciones para las solicitudes HTTP.
 */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

/**
 * Servicio de autenticación que proporciona métodos para interactuar con la autenticación y usuarios.
 */
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  /**
   * URL base del servicio de autenticación.
   */
  private baseUrl: string = 'http://127.0.0.1:8080/api/data';

  /**
   * Constructor del servicio de autenticación.
   * @param http Cliente HTTP para realizar solicitudes.
   */
  constructor(private http: HttpClient) { }

  getStatistics(): Observable<any> {
    return this.http.post(`${this.baseUrl}/statistics`, {});
  }
}
