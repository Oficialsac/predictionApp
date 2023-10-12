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
  succes = false;
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
    this.initForm();
    // Always my application is initialized here thats why we clear localstorage
    localStorage.clear();
  }

  initForm(): void {
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

  get Username() {
    return this.groupForm.get('username')!;
  }
  get Password() {
    return this.groupForm.get('password')!;
  }

  loginSesion(): void {
    //  Validate if the username and password are valid
    //  If they are not valid, a client-side we could see the error message
    this.userNameValid = this.groupForm.get('username')?.valid || false;
    this.passwordNameValid = this.groupForm.get('password')?.valid || false;

    if (this.passwordNameValid && this.userNameValid) {
      this.user = {
        username: this.groupForm.get('username')?.value,
        password: this.groupForm.get('password')?.value,
      };

      // Call the service to get the user and validate

      this.authService.login(this.user).subscribe({
        next: (res) => {
          if (res.success == true) {
            localStorage.setItem('role', res.user.role);
            this.router.navigateByUrl('home');
          } else {
            Swal.fire({
              icon: "error", 
              title: "Usuario o contraseña incorrecta",  
            })
          }
        },
        error: (err) => {
          console.error(err.status);
        }
      });

    }
  }
}
