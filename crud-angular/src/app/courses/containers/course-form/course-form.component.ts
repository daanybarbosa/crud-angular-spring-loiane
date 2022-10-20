import { Course } from './../../model/course';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({ //tipagem do formulario
    _id: [''], //campo escondido, apenas o componente terá acesso
    name: [''], //forma enxuta - iniciando a variavel com String
    category: [''] //forma enxuta - iniciando a variavel com String
  });

  constructor(private formBuilder: NonNullableFormBuilder, //aplicar o nonNullable: true, em todos os campos do formulario
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    //pegar uma imagem da rota em um determinado limite de tempo
    const course: Course = this.route.snapshot.data['course'];
    //console.log(course);
    this.form.setValue({
      //essas variaveis estao presentes no formulario
      _id: course._id,
      name: course.name,
      category: course.category
    })
  }

  onSubmit(){
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open("Curso salvo com sucesso!", "", { duration: 5000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open("Erro ao salvar curso", "", { duration: 5000});
  }

}
