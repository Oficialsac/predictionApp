import { Component } from '@angular/core';
import { AuthServiceService } from '../../../core/services/authService/auth-service.service';
import { User } from '../../../core/schemas/user/user';


@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
  providers: [AuthServiceService]
})
export class AdministratorComponent {
  users: any[] = [];
  constructor(private UserService: AuthServiceService){}

  getUsers(){
    this.UserService.getAllUsers()
    .subscribe((users) => this.users = users);

  }

  updateRol(user: User){
    console.log(user);
  }

  ngOnInit(){
    this.getUsers();
  }
}
