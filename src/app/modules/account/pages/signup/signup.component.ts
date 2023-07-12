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
          console.log(res.success);
          if (res.success === true) {
            window.alert('Registro exitoso')
            this.router.navigate(['/home']);
          }else{
            window.alert('Usuario exists')
          }
        },
        error: (err) => {
          console.error(err.status);
        }
      });

  }
}
