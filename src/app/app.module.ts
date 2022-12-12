import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { FunctionalitysListComponent } from './functionalitys-list/functionalitys-list.component';
import { ComponentsListComponent } from './components-list/components-list.component';
import { ComponentSingleComponent } from './component-single/component-single.component';
import { FunctionalitySingleComponent } from './functionality-single/functionality-single.component';
import { ProjectSingleComponent } from './project-single/project-single.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsListComponent,
    FunctionalitysListComponent,
    ComponentsListComponent,
    ComponentSingleComponent,
    FunctionalitySingleComponent,
    ProjectSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
