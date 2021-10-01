import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User(0,"","","","")

  allUsers:any
  wrongCredentials:boolean = false;
  foundUser:boolean = false;

  findUser(){
    this.userService.userfinder()
    .subscribe(userData =>{
      this.allUsers = userData;
      for (let index = 0; index < this.allUsers.user.length; index++) {
        if (this.user.email == this.allUsers.user[index].email && this.user.password == this.allUsers.user[index].password){
          this.user.id = this.allUsers.user[index].id
          this.user.username = this.allUsers.user[index].username;
          this.user.email = this.allUsers.user[index].email;
          this.user.password = this.allUsers.user[index].password;
          this.user.confirm_password = this.allUsers.user[index].password;
          this.foundUser = true;
        }
      }
    })
  }

  getUser(){
    return this.user
  }

  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
  }

}
