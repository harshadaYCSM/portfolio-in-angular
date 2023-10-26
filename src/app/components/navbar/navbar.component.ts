import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private scrollService: ScrollService) { }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToElement(sectionId);
  }
}
