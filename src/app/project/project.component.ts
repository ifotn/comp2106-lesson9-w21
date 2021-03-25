import { Component, OnInit } from '@angular/core';

// create an in-memory model class of a project to mock up some data
export class Project {
  id: number;
  name: string;
  course: string;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  // create an in-memory project for display
  project: Project = {
    id: 1,
    name: 'Lab 2',
    course: 'COMP2106'
  }
  constructor() { }

  ngOnInit() {
  }

}
