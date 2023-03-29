import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table'  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ViewIssuesComponent } from './view-issues/view-issues.component';
import { ViewProjectsComponent } from './view-projects/view-projects.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    CreateIssueComponent,
    CreateProjectComponent,
    ViewIssuesComponent,
    ViewProjectsComponent,
    ViewUsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
