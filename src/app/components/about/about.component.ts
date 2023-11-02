import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { githubUrl, linkedinUrl } from '../../../assets/info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  // Font Awesome icons for GitHub and LinkedIn
  faGitHub = faGithub;
  faLinkedIn = faLinkedin;

  // URLs for GitHub and LinkedIn profiles
  githubUrl = githubUrl;
  linkedinUrl = linkedinUrl;
}
