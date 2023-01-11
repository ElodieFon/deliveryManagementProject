import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectsListComponent } from '../../projects-list/projects-list.component';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.scss']
})
export class NewProjectFormComponent implements OnInit {

  
projects:Project[]= [];
  

  constructor(private projectService : ProjectService , private location : Location,private route: ActivatedRoute) { }

  ngOnInit(): void {
   
  }
  goBack():void {
    this.location.back();
  }
  newProject(name: String , describe :String): void{
   name=name.trim();
   describe = describe.trim();
   if(!name){return;}
      this.projectService.addProject({name , describe} as Project).subscribe(project => {this.projects.push(project)}),(this.goBack());
  }
}
