import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    // injetar um novo servico
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log("onSubmit");
    //console.log(this.form.value); //todas as informacoes do formulario
    this.service.save(this.form.value)
      //.subscribe(result => console.log(result), error => console.log("error")); //salvar as informacoes do formulario no Spring
      //.subscribe(result => console.log(result), error => {this._snackBar.open("Erro ao salvar curso", "", { duration: 5000})}); //mensagem de erro
      //.subscribe(result => console.log(result), error => this.onError());
      .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.location.back(); //ira retornar para a pagina inicial
  }

  private onSuccess(){
    this.snackBar.open("Curso salvo com sucesso!", "", { duration: 5000});
    this.onCancel(); //reaproveitando o metodo
  }

  private onError(){
    this.snackBar.open("Erro ao salvar curso", "", { duration: 5000});
  }

}
