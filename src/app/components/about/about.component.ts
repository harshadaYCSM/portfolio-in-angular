import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { githubUrl, linkedinUrl } from '../../../assets/info';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  faGitHub = faGithub;
  faLinkedIn = faLinkedin;
  githubUrl = githubUrl;
  linkedinUrl = linkedinUrl;
}
