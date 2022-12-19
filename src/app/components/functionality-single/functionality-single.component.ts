import { Component, Directive, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from 'src/app/models/Project';
import { Functionality } from 'src/app/models/Functionality';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-functionality-single',
  templateUrl: './functionality-single.component.html',
  styleUrls: ['./functionality-single.component.scss']
})


export class FunctionalitySingleComponent implements OnInit {
  @Input()project?:Project;
  @Input()functionality?:Functionality;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService : ProjectService,
    
  ) { }
  
  functionalityId = Number(this.route.snapshot.paramMap.get('functionalityId'));

  ngOnInit(): void {
    this.getProjectById();
   
  }
  getProjectById():void {
    const projectId = Number(this.route.snapshot.paramMap.get('projectId'));
    this.projectService.getProjectById(projectId).subscribe(project => this.project = project)
  }
  
}
