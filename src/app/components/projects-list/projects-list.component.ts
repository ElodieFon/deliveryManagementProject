import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  allProjects : Project[] = [];

  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
    this.getAllProjects();
  }
  getAllProjects():void {
    this.projectService.getAllProjects()
    .subscribe(allProjects => this.allProjects = allProjects);
  }
}
