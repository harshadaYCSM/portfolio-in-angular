import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  templateUrl: './typewriter.component.html',
  styleUrls: ['./typewriter.component.css']
})
export class TypewriterComponent implements OnInit {
  view = { type: '' };
  word = {
    skill: [
      "Software Developer",
      "Smart TV App Developer",
      "Frontend Developer",
      "ReactJS Enthusiast",
      "Aspiring Fullstack Developer",
      "A Job Seeker, currently",
    ]
  };
  idx = 0;
  n = 0;
  up = true;

  ngOnInit() {
    this.startTypewriterEffect();
  }

  startTypewriterEffect() {
    setInterval(() => {
      const word = this.word.skill[this.idx];
      const ln = word.length;

      if (this.up) {
        this.view.type = word.slice(0, this.n);
        this.n++;
      }
      if (this.n === ln + 1) {
        this.up = false;
      }
      if (!this.up) {
        this.view.type = word.slice(0, this.n);
        this.n--;
      }
      if (this.n === 0) {
        this.up = true;
        this.idx++;
      }
      if (this.idx === this.word.skill.length) {
        this.idx = 0;
      }
    }, 170);
  }
}
