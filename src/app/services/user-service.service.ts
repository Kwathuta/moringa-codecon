import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  usermaker(user:any){
    return this.http.post('http://127.0.0.1:5000/auth/user_controls',user)
  }
  userfinder(){
    return this.http.get('http://127.0.0.1:5000/auth/user_controls')
  }
  issueMaker(issue:any){
    return this.http.post('http://127.0.0.1:5000/auth/issue',issue)
  }
  
}
