import { Injectable } from '@angular/core';
import{ Observable, of , throwError}from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpClient, HttpBackend , HttpHeaders}from '@angular/common/http'
import { Project } from '../models/Project';
import { PROJETS } from '../mock-projects';
import { environment } from '../../environments/environment';
import { Functionality } from '../models/Functionality';
import { FunctionalityComponent } from '../models/FunctionalityComponent';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  readonly API_URL = environment.baseUrl;
  readonly ENDPOINT_PROJECTS = "/projects";
  readonly ENDPOINT_PROJECT = "/project";
  readonly ENDPOINT_FUNCTIONALITIES = "/functionalities";
  readonly ENDPOINT_FUNCTIONALITY = "/functionality";
  readonly ENDPOINT_COMPONENTS = "/components";
  readonly ENDPOINT_COMPONENT = "/component";


  constructor(private httpClient: HttpClient) { }
  // entity projet

  getAllProjects():Observable<Project[]>{
    return this.httpClient.get<Project[]>(this.API_URL+this.ENDPOINT_PROJECTS);
  }
  getProjectById(id: number):Observable<Project>{
    const url = `${this.API_URL+this.ENDPOINT_PROJECT}/${id}`;
    return this.httpClient.get<Project>(url);
  }

// entity functionality

  getFunctionalityById(id: number):Observable<Functionality>{
    const url = `${this.API_URL+this.ENDPOINT_FUNCTIONALITY}/${id}`;
    return this.httpClient.get<Functionality>(url);
  }

//entity functionalityComponent
  getComponentById(id: number):Observable<FunctionalityComponent>{
    const url = `${this.API_URL+this.ENDPOINT_COMPONENT}/${id}`;
    return this.httpClient.get<FunctionalityComponent>(url);
  }
}
