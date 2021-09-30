import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User(0,"","","","")
  constructor() { }

  ngOnInit(): void {
  }

}
