import { Component, Input } from '@angular/core';
import { projects } from '../../../assets/info'; // Adjust the path as needed

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'] // Adjust the path as needed
})
export class ProjectItemComponent {

  @Input() project: string = '  ';
  projectData: any; // Create a property to store the project data

  constructor() { }

  ngOnInit() {
    // Initialize the projectData property with the data for the specified project
    this.projectData = projects[this.project];
  }
}
