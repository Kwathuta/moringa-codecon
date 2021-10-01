import { Component, OnInit } from '@angular/core';

import { Issue } from '../issue';

import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

  issue = new Issue(0,"","","")

  addIssue(){
    this.userService.issueMaker(this.issue).subscribe()
  }

  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
  }

}
