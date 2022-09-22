import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  // dataSource - informações da tabela
  //courses: any[] = []; //sem tipo
  courses: Course[] = [ //tipo Course
    { _id: "1", name: "Angular", category: "Front-end" }
  ];
  //courses: Course[]; //sem iniciar a variavel para que seja feito dentro do construtor

  displayedColumns = ['name', 'category']; //especificar as colunas que serão exibidas na tabela

  constructor() {
    //this.courses = []; //inicializando a variavel dentro do construtor
  }

  ngOnInit(): void {

  }

}
