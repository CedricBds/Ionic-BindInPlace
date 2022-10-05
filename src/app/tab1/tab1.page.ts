import { Component } from '@angular/core';
import { CreateProjectPage } from '../create-project/create-project.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  createProject = CreateProjectPage;

  constructor() {}

}
