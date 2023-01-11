import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common'

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectSingleComponent } from './components/project-single/project-single.component';
import { FunctionalitySingleComponent } from './components/functionality-single/functionality-single.component';
import { ComponentSingleComponent } from './components/functionalityComponent-single/component-single.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component:DashboardComponent},
  {path: 'projects', component:ProjectsListComponent},
  {path: 'project/:id',component:ProjectSingleComponent},
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
