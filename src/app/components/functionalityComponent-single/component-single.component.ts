import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from 'src/app/models/Project';
import { Functionality } from 'src/app/models/Functionality';
import { ComponentFunctionality } from 'src/app/models/ComponentFunctionality';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-component-single',
  templateUrl: './component-single.component.html',
  styleUrls: ['./component-single.component.scss']
})
export class ComponentSingleComponent implements OnInit {

  @Input()project?:Project;
  @Input()functionality?:Functionality;
  @Input()componentFunctionality?:ComponentFunctionality;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private projectService : ProjectService,
  ) { 
    
  }

  functionalityId = Number(this.route.snapshot.paramMap.get('functionalityId'));
  componentId = Number(this.route.snapshot.paramMap.get('componentId'));

  ngOnInit(): void {
    this.getProjectById();
  }
  getProjectById():void {
    const projectId = Number(this.route.snapshot.paramMap.get('projectId'));
    this.projectService.getProjectById(projectId).subscribe(project => this.project = project);
  }
}
