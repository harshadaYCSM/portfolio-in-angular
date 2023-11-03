import { Component } from '@angular/core';
import { name, keywords } from 'src/assets/info';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  name: string = name;
  keywords: string[] = keywords;
}
