import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common'

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectSingleComponent } from './components/project-single/project-single.component';
import { FunctionalitySingleComponent } from './components/functionality-single/functionality-single.component';
import { ComponentSingleComponent } from './components/functionalityComponent-single/component-single.component';
import { NewProjectFormComponent } from './components/forms/new-project-form/new-project-form.component';
import { UpdateProjectFormComponent } from './components/forms/update-project-form/update-project-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component:DashboardComponent},
  {path: 'projects', component:ProjectsListComponent},
  {path:'projects/addProject',component:NewProjectFormComponent},
  {path: 'project/:id',component:ProjectSingleComponent},
  {path:'project/:id/update',component:UpdateProjectFormComponent},
  {path: 'project/:id/functionality/:functionalityId',component:FunctionalitySingleComponent},
  {path: 'project/:id/functionality/:functionalityId/component/:componentId',component:ComponentSingleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private location: Location){}
  
  back(): void {
    this.location.back()
  }
}
