import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ViewIssuesComponent } from './view-issues/view-issues.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: ViewUsersComponent },
  { path: 'issues', component: ViewIssuesComponent },
  { path: 'projects', component: ViewProjectsComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'create-issue', component: CreateIssueComponent },
  { path: 'create-project', component: CreateProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
