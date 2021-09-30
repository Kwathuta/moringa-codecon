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

  findUser(){
    this.userService.userfinder(this.user).subscribe()
  }

  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
  }

}
