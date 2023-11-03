import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectItems = [
    { title: 'Portfolio', imageUrl: 'assets/Picture1.png' },
    { title: 'User Management', imageUrl: 'assets/Picture2.png' },
    { title: 'Email Clone', imageUrl: 'assets/Picture3.png' },
    { title: 'Test Player', imageUrl: 'assets/Picture4.png' },
    { title: 'E-commerce Demo', imageUrl: 'assets/Picture5.png' },
    { title: 'Streaming App Clone', imageUrl: 'assets/Picture6.png' },
  ];
}

