import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';
import { Client, ClientService } from '../client.service';
import { Project, ProjectService } from '../project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.page.html',
  styleUrls: ['./create-project.page.scss'],
})
export class CreateProjectPage implements OnInit {
   step: number;
   public newclient:Client = {folderId: 0, firstName: "", lastName: "", phoneNumber: "", project: []};

   public newProject:Project = {folderId: 0, projectName: "", projectDetails: "", projectColors: {
    primary: "#000",
    secondary: "#000",
    tertiary: "#000"
   }}    

  
   
/**
 * 
 * @param clientService contient le dossier client ainsi que les fonctions associés
 * @param projectService contient le dossier projet ainsi que les fonctions associés
 * @param toastController alertes
 */
  constructor(
    public clientService: ClientService,
    private projectService: ProjectService,
    toastController: ToastController
  ) { }
  

  ngOnInit() {
    /* Etape de création de projet
    1: le client
    2: projet*/
    this.step = 1;
  }

  /**
   * Permet de sauvegarder un nouveau client dans le clientservice
   */
  async saveClient(){
    this.newclient.project.push(this.newProject)
   await this.clientService.addClient(this.newclient).then(async () => {
    this.presentToast('Client Sauvegardé ☀️');
   })
  }
/**
 * Permet de sauvegarder un nouveau projet dans le projectservice
 */
  async saveProject(){
    await this.projectService.addProject(this.newProject).then(async () =>{
      this.presentToast('Projet Sauvegardé')
    })
  }
/**
 * permet de générer une nouvelle alerte
 * @param message de l'alerte
 */
  async presentToast(message: string) {
    const toast = await toastController.create({
      message: message,
      duration: 1500,
      position: 'top'
    });

    await toast.present();
  }



}
