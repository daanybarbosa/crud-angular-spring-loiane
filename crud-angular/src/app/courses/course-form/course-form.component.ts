import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NonNullableFormBuilder, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

/**
 * Nova versão do Angular (14.1.0)
 * UntypedFormGroup - declarar o formulário
 * UntypedFormBuilder - agrupar os conjuntos de formularios
 */
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({ //tipagem do formulario
    name: [''], //forma enxuta - iniciando a variavel com String
    category: [''] //forma enxuta - iniciando a variavel com String
    //name: new FormControl('', {nonNullable: true}), //nonNullable: true - nao ira permitir a atribuição de valor nulo
    //category: new FormControl('', {nonNullable: true})
  });

  //constructor(private formBuilder: FormBuilder,
  constructor(private formBuilder: NonNullableFormBuilder, //aplicar o nonNullable: true, em todos os campos do formulario
    // injetar um novo servico
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location) {
    //this.form = this.formBuilder.group({ //constutor
      //name: [null], //forma enxuta - sem declarar o tipo do campo
      //category: [null] //forma enxuta - sem declarar o tipo do campo
      //name: new FormControl<string | null>(''), //declarando com o tipo String ou nulo
      //name: new FormControl<string>(''), //declarando com o tipo String
      //category: new FormControl<string>('')
    //});
  }

  ngOnInit(): void {
    //this.form.value; //acessar os valores do formulario
    //this.form.get('name');
    //this.form.value.name = 'Daniele'; //acessar os valores do formulario e/ou atribuir valores
    //this.form.value.name = null; //erro - nao permite a atribuição de um valor nulo
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
