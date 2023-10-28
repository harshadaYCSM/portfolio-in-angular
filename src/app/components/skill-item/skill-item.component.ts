import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent {

  @Input() skillSet: any;
  @Input() skillType: string = '';
  @Input() id: number = 0;

  getSkillIcon(skill: string): string {
    // Define your logic to get the appropriate Font Awesome icon class here
    // You can use a switch statement or object mapping similar to your 'skillIconsList'
    // and return the corresponding icon class.
    return 'fa-icon-class'; // Replace with the actual icon class
  }

  constructor() { }
}
