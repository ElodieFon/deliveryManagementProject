import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.scss']
})
export class ProjectSingleComponent implements OnInit {
@Input()project?:Project;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService : ProjectService
  ) { }

  ngOnInit(): void {
    this.getProjectById();
  }
  getProjectById():void {
    const projectId = Number(this.route.snapshot.paramMap.get('projectId'));
    this.projectService.getProjectById(projectId).subscribe(project => this.project = project)
  }
}
