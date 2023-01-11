import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsListComponent} from './components/projects-list/projects-list.component';
import { ProjectSingleComponent } from './components/project-single/project-single.component';
import { FunctionalitySingleComponent } from './components/functionality-single/functionality-single.component';
import { ComponentSingleComponent } from './components/functionalityComponent-single/component-single.component';
import { NewProjectFormComponent } from './components/forms/new-project-form/new-project-form.component';
import { NewFunctionalityFormComponent } from './components/forms/new-functionality-form/new-functionality-form.component';
import { UpdateFunctionalityFormComponent } from './components/forms/update-functionality-form/update-functionality-form.component';
import { UpdateProjectFormComponent } from './components/forms/update-project-form/update-project-form.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectSingleComponent,
    ProjectsListComponent,
    FunctionalitySingleComponent,
    ComponentSingleComponent,
    NewProjectFormComponent,
    NewFunctionalityFormComponent,
    UpdateFunctionalityFormComponent,
    UpdateProjectFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
