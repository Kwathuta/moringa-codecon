import { Component, OnInit } from '@angular/core';

import { Issue } from '../issue';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

  issue = new Issue(0,"","","")

  constructor() { }

  ngOnInit(): void {
  }

}
