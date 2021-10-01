import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

import { Issue } from 'src/app/issue';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  
  issues: Issue[] =[

  ] 
  issueInfo:any

  constructor(private issueService:UserServiceService) { }

  ngOnInit(): void {
    this.issueService.issueFinder()
      .subscribe(issueData => {
        this.issueInfo = issueData;
        for (let index = 0; index < this.issueInfo.Issues.length; index++) {
          this.issues[index] = new Issue(0,"","","")
          this.issues[index].id = this.issueInfo.Issues[index].id;
          this.issues[index].title = this.issueInfo.Issues[index].title;
          this.issues[index].category_choice = this.issueInfo.Issues[index].category_choice;
          this.issues[index].body = this.issueInfo.Issues[index].body;
          this.issues.push(this.issues[index])
        }
      })
      console.log(this.issues)
  }

}
