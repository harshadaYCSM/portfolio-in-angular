import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { githubUrl, linkedinUrl } from '../../../assets/info';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  // Font Awesome icons for GitHub and LinkedIn
  faGitHub: IconDefinition = faGithub;
  faLinkedIn: IconDefinition = faLinkedin;

  // URLs for GitHub and LinkedIn profiles
  githubUrl: string = githubUrl;
  linkedinUrl: string = linkedinUrl;
}
