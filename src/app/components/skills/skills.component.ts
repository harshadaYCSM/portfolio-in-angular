import { Component, OnInit } from '@angular/core';
import { skillSet, skillTypes } from '../../../assets/info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillSet = skillSet;
  skillTypes = skillTypes;

  constructor() { }

  ngOnInit(): void {
  }
}
