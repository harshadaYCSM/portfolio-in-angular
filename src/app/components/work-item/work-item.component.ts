import { Component, Input } from '@angular/core';
import { projects } from '../../../assets/info';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.css']
})
export class WorkItemComponent {
  @Input() project: string = '  ';
  projectData: any; // Create a property to store the project data

  constructor() { }

  ngOnInit() {
    // Initialize the projectData property with the data for the specified project
    this.projectData = projects[this.project];
  }
}

