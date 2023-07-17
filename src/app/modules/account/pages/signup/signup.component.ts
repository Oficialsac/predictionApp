/* eslint-disable */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../../../../core/services/authService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthServiceService]
})
export class SignupComponent implements OnInit {

  isSuccess = false;
  successMessage = ""
  noSuccessful = false;

  user = {
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

  signup(): void {

      this.user = {
        username: this.groupForm.get('username')?.value,
        password: this.groupForm.get('password')?.value,
      };

      // Call the service to get the user and validate

      this.authService.signin(this.user).subscribe({
        next: (res) => {
          if (res.success === true) {
            this.isSuccess = true;
            this.successMessage = "Registro exitoso!";
            setTimeout(() => {
              this.isSuccess = false;
              this.router.navigate(['/login']);
            }, 2000)
          }else{
            this.isSuccess = true;
            this.successMessage = "El usuario ya existe!";
            setTimeout(() => {
              this.isSuccess = false;
              this.router.navigate(['/login']);
            }, 2000)
          }
        },
        error: (err) => {
          console.error(err.status);
        }
      });

  }
}
