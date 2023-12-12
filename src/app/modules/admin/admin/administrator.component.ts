import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../../core/services/authService/auth-service.service';
import { User } from '../../../core/schemas/user/user';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
  providers: [AuthServiceService],
})
export class AdministratorComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: AuthServiceService) {}

  // Obtener la lista de usuarios
  getUsers() {
    this.userService.getAllUsers()
    .subscribe((users) => (this.users = users));
    console.log(this.users);
  }

  // Actualizar el rol de un usuario
  updateRol(user: User) {
    console.log(user);
  }

  ngOnInit(): void {
    // Al inicializar el componente, obtener la lista de usuarios
    this.getUsers();
  }
}
