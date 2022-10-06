import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, ClientService } from '../client.service';
import { Project, ProjectService } from '../project.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public clientFolders;

  public clientsFolders:[
    {
      client: Client,
      project:Project
    }
  ];
 
 
  constructor(private clientService: ClientService, private projectService: ProjectService, private router:Router) {
    this.clientFolders = this.clientService.clientList
  }

  ngOnInit(){
  }
  

  getClientFolders(){
    let folders = [];
     if (this.clientService.getAll()){
       this.clientService.getAll().forEach((c) => 
      this.projectService.getAllProjects().filter((p) => { p.folderId = c.folderId; folders.push({client: c, project: p})}
      ))
          
    }

    console.log(folders)

  }
}
