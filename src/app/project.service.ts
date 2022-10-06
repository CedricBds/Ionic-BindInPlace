import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * Service de gestion des projets
 */
export class ProjectService {
  public projects: Project[] = [];

  constructor() { }

/**
 * 
 * @param folderId client's folder
 * @returns 
 */
  getProject(folderId: number){
  return this.projects.filter((p) => p.folderId === folderId)
  }

  /**
   * 
   * @returns l'intégralité des projets
   */
  getAllProjects(){
    return this.projects
  }
/**
 * 
 * @param project to save
 * @returns 
 */
  async addProject(project: Project){
    this.projects.push(project)
    console.log(this.projects)
    return true;
  }

}

/**
 * Interface projet
 */
export interface Project{
  folderId: number;
  projectName: string;
  projectDetails: string;
  projectColors: {
    primary: string;
    secondary: string;
    tertiary: string;
  }
}