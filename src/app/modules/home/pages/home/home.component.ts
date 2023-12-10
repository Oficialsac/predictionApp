/* eslint-disable */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  role: boolean = true;

  ngOnInit(): void {
    // Verificar el rol almacenado en el localStorage al iniciar el componente
    const storedRole = localStorage.getItem('role');
    
    // Asignar el valor booleano a la propiedad 'role' según el rol almacenado
    this.role = storedRole === 'admin';
  }
}
