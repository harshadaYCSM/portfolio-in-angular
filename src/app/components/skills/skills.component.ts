import { Component } from '@angular/core';
import { skillSet, skillTypes } from '../../../assets/info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillSet: { [key: string]: string[] } = skillSet;
  skillTypes: string[] = skillTypes;

  constructor() { }
}
