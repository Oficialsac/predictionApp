/* eslint-disable */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../../core/services/authService/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthServiceService],
})
export class LoginComponent {
  userNameValid: boolean = false;
  passwordNameValid: boolean = false;
  success = false;
  admin_role = false;
  noSuccessful = false;

  user = {
    username: '',
    password: '',
  };

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  public groupForm!: FormGroup;

  ngOnInit(): void {
    // Inicializa el formulario al iniciar el componente
    this.initForm();
    
    // Siempre que se inicia mi aplicación, se limpia el localStorage
    localStorage.clear();
  }

  initForm(): void {
    // Inicializa el formulario y define las validaciones
    this.groupForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
      ]),
    });
  }

  // Obtener controles individuales del formulario
  get Username() {
    return this.groupForm.get('username')!;
  }
  get Password() {
    return this.groupForm.get('password')!;
  }

  loginSesion(): void {
    // Validar si el nombre de usuario y la contraseña son válidos
    // Si no son válidos, en el lado del cliente podríamos ver el mensaje de error
    this.userNameValid = this.groupForm.get('username')?.valid || false;
    this.passwordNameValid = this.groupForm.get('password')?.valid || false;

    // Verificar si los campos son válidos
    if (this.passwordNameValid && this.userNameValid) {
      this.user = {
        username: this.groupForm.get('username')?.value,
        password: this.groupForm.get('password')?.value,
      };

      // Llamar al servicio para iniciar sesión y validar al usuario
      this.authService.login(this.user).subscribe({
        next: (res) => {
          // Manejar la respuesta del servicio
          if (res.success == true) {
            localStorage.setItem('role', res.user.role);
            this.router.navigateByUrl('home');
          } else {
            // Mostrar alerta si el usuario o la contraseña son incorrectos
            Swal.fire({
              icon: 'error',
              title: 'Usuario o contraseña incorrecta',
            });
          }
        },
        error: (err) => {
          console.error(err.status);
        }
      });
    }
  }
}
