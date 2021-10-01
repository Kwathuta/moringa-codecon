import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { SignupComponent } from './components/signup/signup.component'
import { HomeComponent } from './components/home/home.component'
import { NewIssueComponent } from './new-issue/new-issue.component';

const routes: Routes = [
  { path: '', redirectTo: '/forum', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path : 'issue', component: NewIssueComponent},
  { path: 'forum', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
