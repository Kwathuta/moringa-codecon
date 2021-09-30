import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User(0,"","","","");
  addUser(){
    this.userService.usermaker(this.user)
    .subscribe()
    }

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

}
