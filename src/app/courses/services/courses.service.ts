import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, take, tap } from 'rxjs/operators';

import { Course } from '../model/course';

//Injeção de dependencias
@Injectable({
  providedIn: 'root' //raiz do projeto - global
})
export class CoursesService {

  //url
  private readonly API = '/assets/courses.json';

  //comunicação com a API
  constructor(private httpClient: HttpClient){}

  list() {
    //Chamada HTTP Get - HttpClient
    return this.httpClient.get<Course[]>(this.API) //pegando informacoes - retorna um array de courses
      .pipe(
        //take(1), //assim que conseguir a resposta do servidor, ela será finalizada
        first(), //primeira resposta que o servidor enviar  - lista de json
        tap(courses => console.log(courses)) //ira retornar a lista de cursos
      ); //será manipulado essa informação de forma reativa, utilizando operadores RXJS
  }
}
