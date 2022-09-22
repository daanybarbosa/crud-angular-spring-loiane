import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [ //tipo Course
    { _id: "1", name: "Angular", category: "Front-end" }
  ];
  displayedColumns = ['name', 'category']; //especificar as colunas que serão exibidas na tabela

  constructor() {
    //this.courses = []; //inicializando a variavel dentro do construtor
  }

  ngOnInit(): void {

  }

}
