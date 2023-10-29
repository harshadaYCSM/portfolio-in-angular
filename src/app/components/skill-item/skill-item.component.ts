import { Component, Input } from '@angular/core';
import { skillIconsList } from '../../../assets/info';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent {
  @Input() skillSet: any;
  @Input() skillType: string = '';
  @Input() id: number = 0;

  getSkillIcon(skill: string): any {
    return skillIconsList[skill];
  }

  constructor() { }
}
