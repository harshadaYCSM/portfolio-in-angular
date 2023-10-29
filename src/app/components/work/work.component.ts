import { Component } from '@angular/core';
import { projectNames, summary } from '../../../assets/info';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'] // Adjust the path as needed
})
export class WorkComponent {
  projectNames = projectNames;
  summary = summary;

  constructor() { }
}
