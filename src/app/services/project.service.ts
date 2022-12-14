import { Injectable } from '@angular/core';
import{ Observable, of}from 'rxjs';

import { Project } from '../models/Project';
import { PROJETS } from '../mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getAllProjects(){
    const allProjects = of(PROJETS);
    return allProjects ; 
  }
  getProjectById(idProject : number){
    const project = PROJETS.find(p => p.id === idProject)!;
    return project;
  }
}
