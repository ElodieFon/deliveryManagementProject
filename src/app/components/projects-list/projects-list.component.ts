import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
  providers : [ProjectService]
})
export class ProjectsListComponent implements OnInit {

  projects : Project[] = [];


  constructor(private projectService : ProjectService ) { 
    
   
  }

  ngOnInit(): void { 
   
    this.projectService.getAllProjects()
    .subscribe(projects => this.projects = projects);
  }

  deleteProject(project : Project){
    this.projects = this.projects.filter(p => p !== project);
    this.projectService.deleteProject(project.id).subscribe();
  }
 //


}
