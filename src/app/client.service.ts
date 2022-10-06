import { Injectable } from '@angular/core';
import { Project } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  public clientList:Client[] = [];
  public folderId = 0;
  constructor() { }

  async addClient(client: Client){
    client.folderId = this.folderId++
    client.project.forEach((p) => p.folderId = client.folderId)
    this.clientList.push(client);
    client = undefined;
    console.log(this.clientList)
  }

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