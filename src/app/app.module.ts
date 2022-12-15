import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsListComponent} from './components/projects-list/projects-list.component';
import { ProjectSingleComponent } from './components/project-single/project-single.component';
import { FunctionalitySingleComponent } from './components/functionality-single/functionality-single.component';
import { FunctionalitysListComponent } from './components/functionalitys-list/functionalitys-list.component';
import { ComponentSingleComponent } from './components/functionalityComponent-single/component-single.component';
import { ComponentsListComponent } from './components/FunctionalityComponents-list/components-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectSingleComponent,
    ProjectsListComponent,
    FunctionalitySingleComponent,
    FunctionalitysListComponent,
    ComponentSingleComponent,
    ComponentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
