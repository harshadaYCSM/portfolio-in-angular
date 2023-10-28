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
    TypewriterComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
