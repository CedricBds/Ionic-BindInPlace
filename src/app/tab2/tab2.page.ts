import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Share } from '@capacitor/share';
import { Client, ClientService } from '../client.service';
import { Project, ProjectService } from '../project.service';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

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


  }

  /*Permet de partager un projet sur les reseaux*/
  async shareProject(client: Client, project: Project){
    await Share.share({
      title: 'Client:' + `${client.firstName} ${client.lastName}`,
      text: 'Nom du projet:\n' + project.projectName + '\nDescription:\n' + project.projectDetails,
    });
  }

/*Permet d'exporter un projet dans les fichiers de l'appareil, non fonctionnel */
  async exportProject(client: Client, project: Project){

      await Filesystem.writeFile({
        path: 'secrets/text.txt',
        data: 'Client:' + `${client.firstName} ${client.lastName}\n` + 'Nom du projet:\n' + project.projectName + '\nDescription:\n' + project.projectDetails,
        directory: Directory.Documents,
        encoding: Encoding.UTF8,
      });
  }
}
