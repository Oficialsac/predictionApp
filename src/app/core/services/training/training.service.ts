/* eslint-disable */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';

/**
 * Servicio para realizar operaciones relacionadas con el entrenamiento de datos.
 */
@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  /**
   * URL base para las operaciones del servicio.
   */
  baseUrl: string = 'http://127.0.0.1:8080/api/data';

  /**
   * Cabeceras HTTP para las solicitudes.
   */
  headers = new HttpHeaders();

  /**
   * Constructor del servicio de entrenamiento.
   * @param http Cliente HTTP para realizar solicitudes.
   */
  constructor(private http: HttpClient) { }

  /**
   * Envía una solicitud POST para cargar datos de entrenamiento.
   * @param body Cuerpo de la solicitud en formato FormData.
   * @returns Observable con la respuesta del servidor.
   */
  sendPost(body: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/training`, body);
  }

  /**
   * Envía una solicitud POST para iniciar el entrenamiento de datos.
   * @returns Observable con la respuesta del servidor.
   */
  trainingData(): Observable<any> {
    return this.http.post(`${this.baseUrl}/training_data`, {});
  }
}
