/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../../core/services/authService/auth-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthServiceService],
})
export class SignupComponent implements OnInit {
  isSuccess = false;
  successMessage = '';
  noSuccessful = false;
  userNameValid: boolean = false;
  passwordNameValid: boolean = false;
  emailValid: boolean = false;

  user = {
    email: '',
    username: '',
    password: '',
  };

  public groupForm!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    // Inicializa el formulario y define las validaciones
    this.groupForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
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
  get Email() {
    return this.groupForm.get('email')!;
  }

  signup(): void {
    // Validar campos del formulario
    this.userNameValid = this.groupForm.get('username')?.valid || false;
    this.passwordNameValid = this.groupForm.get('password')?.valid || false;
    this.emailValid = this.groupForm.get('email')?.valid || false;

    // Verificar si los campos son válidos
    if (this.userNameValid && this.passwordNameValid && this.emailValid) {
      this.user = {
        email: this.groupForm.get('email')?.value,
        username: this.groupForm.get('username')?.value,
        password: this.groupForm.get('password')?.value,
      };

      // Llamar al servicio para registrar al usuario
      this.authService.signin(this.user).subscribe({
        next: (res) => {
          // Manejar la respuesta del servicio
          if (res.success === true) {
            Swal.fire({
              icon: 'success',
              title: 'Usuario registrado correctamente',
            });

            setTimeout(() => {
              this.isSuccess = false;
              this.router.navigate(['/login']);
            }, 2000);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'El usuario ya está registrado',
            });

            setTimeout(() => {
              this.isSuccess = false;
              this.router.navigate(['/login']);
            }, 2000);
          }
        },
        error: (err) => {
          console.error(err.status);
        },
      });
    } else {
      // Mostrar alerta si los campos no son válidos
      console.log('Alguno de los campos no es válido');
      // Sweet Alert
    }
  }
}
