import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses', //nome do componente/tag do html para exportar esse componente
  templateUrl: './courses.component.html', //endereço do arquivo que tem o arquivo em html
  styleUrls: ['./courses.component.scss'] //estilo - referencia para o arquivo de css
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []; //tipo Course
  displayedColumns = ['name', 'category']; //especificar as colunas que serão exibidas na tabela

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) { //injecao diretamente
    //this.courses = []; //inicializando a variavel dentro do construtor
    //this.coursesService = new CoursesService(); //instancia manual
    //this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
    this.courses = this.coursesService.list();
  }

}
