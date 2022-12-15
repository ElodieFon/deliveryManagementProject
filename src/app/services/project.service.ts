import { Injectable } from '@angular/core';
import{ Observable, of}from 'rxjs';

import { Project } from '../models/Project';
import { PROJETS } from '../mock-projects';
import { Functionality } from '../models/Functionality';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getAllProjects():Observable<Project[]>{
    const allProjects = of(PROJETS);
    return allProjects;
  }
  getProjectById(id: number):Observable<Project>{
    const project = PROJETS.find(p => p.id === id)!;
    return of (project);
  }


}
