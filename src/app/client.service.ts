import { Injectable } from '@angular/core';
import { Project } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  /*La liste des clients*/
  public clientList:Client[] = [];
  /*Numéro de dossier client , fait office de foreign key*/
  public folderId = 0;
  constructor() { }

  /*Ajouter un client*/
  async addClient(client: Client){

    client.folderId = this.folderId++
    /*On associe le projet au bon numéro de dossier*/
    client.project.forEach((p) => p.folderId = client.folderId)
    this.clientList.push(client);
    /*On libére l'espace de la variable client*/
    client = undefined;
  }

  /**
   * Retourne l'enssemble des clients
   */
  public getAll() {
    if (this.clientList.length){
      return this.clientList;

    }
  }

}


export interface Client{
  folderId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  project: Project[];
}

