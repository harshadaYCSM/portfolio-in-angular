import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { WorkComponent } from './components/work/work.component';
import { IntroComponent } from './components/intro/intro.component';
import { TypewriterComponent } from './components/typewriter/typewriter.component';
import { WorkItemComponent } from './components/work-item/work-item.component';
import { FooterComponent } from './components/footer/footer.component';

import { ScrollService } from './services/scroll/scroll.service';


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
    IntroComponent,
    TypewriterComponent,
    FooterComponent,
    WorkItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
