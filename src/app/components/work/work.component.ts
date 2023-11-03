import { Component } from '@angular/core';
import { projectNames, summary } from '../../../assets/info';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  projectNames: string[] = projectNames;
  summary: string = summary;
}
