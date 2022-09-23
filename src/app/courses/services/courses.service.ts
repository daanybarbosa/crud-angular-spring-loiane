import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

//Injeção de dependencias
@Injectable({
  providedIn: 'root' //raiz do projeto - global
})
export class CoursesService {

  //comunicação com a API
  constructor(private httpClient: HttpClient){}

  list(): Course[] {
    return [
      //retornar a lista de cursos
      { _id: "1", name: "Angular", category: "Front-end" }
    ]
  }
}
