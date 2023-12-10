/* eslint-disable */
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../schemas/user/user';

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
export class AuthServiceService {
  /**
   * URL base del servicio de autenticación.
   */
  private baseUrl: string = 'http://127.0.0.1:8080/api/auth';

  /**
   * Constructor del servicio de autenticación.
   * @param http Cliente HTTP para realizar solicitudes.
   */
  constructor(private http: HttpClient) { }

  /**
   * Actualiza la información de un usuario.
   * @param body Datos del usuario a actualizar.
   * @returns Observable con la respuesta de la solicitud.
   */
  updateUser(body: User): Observable<any> { 
    return this.http.put(this.baseUrl, body);
  }

  /**
   * Obtiene la lista de todos los usuarios.
   * @returns Observable con la respuesta de la solicitud.
   */
  getAllUsers(): Observable<any> {
    return this.http.get("http://127.0.0.1:8080/api/auth/users");
  }

  /**
   * Realiza la solicitud de inicio de sesión.
   * @param body Datos del usuario para iniciar sesión.
   * @returns Observable con la respuesta de la solicitud.
   */
  login(body: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, body);
  }

  /**
   * Realiza la solicitud de registro de un nuevo usuario.
   * @param body Datos del usuario para el registro.
   * @returns Observable con la respuesta de la solicitud.
   */
  signin(body: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, body);
  }
}
