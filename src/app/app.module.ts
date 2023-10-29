import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ScrollService } from './services/scroll/scroll.service';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { IntroComponent } from './components/intro/intro.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faLaptopCode, faTerminal, faPalette, faCogs, faFileCode, faAd, faToolbox, faTvAlt, faStore, faB, faDashboard } from '@fortawesome/free-solid-svg-icons';
import { faConfluence, faGit, faFigma, faNpm, faChrome, faJira, faSass, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


library.add(
  faCode, faLaptopCode, faTerminal, faPalette, faCogs, faFileCode, faAd,
  faToolbox, faTvAlt, faStore, faB, faDashboard,
  faConfluence, faGit, faFigma, faNpm, faChrome, faJira, faSass, faJsSquare,
  faHtml5, faCss3Alt, faJs, faReact, faGithub, faLinkedin
);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    NavbarComponent,
    SkillItemComponent,
    WorkComponent,
    ProjectItemComponent,
    IntroComponent,
    TypewriterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
