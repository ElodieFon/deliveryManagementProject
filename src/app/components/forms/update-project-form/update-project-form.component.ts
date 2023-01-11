import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-update-project-form',
  templateUrl: './update-project-form.component.html',
  styleUrls: ['./update-project-form.component.scss']
}) 

export class UpdateProjectFormComponent implements OnInit {

project : Project | undefined;

 
  constructor( private route: ActivatedRoute,
    private location: Location,
    private projectService : ProjectService) { }

  ngOnInit(): void {
    this.getProjectById();
  }
  goBack():void {
    this.location.back();
  }
  getProjectById():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.projectService.getProjectById(id)
    .subscribe(project => this.project = project)
  }
  saveProject(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(this.project){
      this.projectService.updateProject(id , this.project).subscribe(()=> this.goBack())
    }
  }
}
