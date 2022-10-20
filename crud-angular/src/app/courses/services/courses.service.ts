import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

//Injeção de dependencias
@Injectable({
  providedIn: 'root' //raiz do projeto - global
})
export class CoursesService {

  //url
  //private readonly API = '/assets/courses.json';

  //API criada no Spring
  //private readonly API = 'http://localhost:8080/api/courses';
  private readonly API = 'api/courses';

  //comunicação com a API
  constructor(private httpClient: HttpClient){}

  list() {
    //Chamada HTTP Get - HttpClient
    return this.httpClient.get<Course[]>(this.API) //pegando informacoes - retorna um array de courses
      //será manipulado essa informação de forma reativa, utilizando operadores RXJS
      .pipe(
        first(), //primeira resposta que o servidor enviar  - lista de json
        delay(5000), //5 segundos para o spinner
        //tap(courses => console.log(courses)) //ira retornar a lista de cursos
      );
  }

  //ira recuperar o id do curso
  loadById(id: string){
    //ira fazer chamadas para o servidor, retornando o tipo curso e buscando a api/courses/id
    return this.httpClient.get<Course>(`${this.API}/${id}`);
  }

  save(record: Partial<Course>){ //ira aceitar um valor parcial de Course (nesse caso, ele não está recebendo o id, por isso, é um dado parcial)
    console.log(record);
    //return this.httpClient.post<Course>(this.API, record).pipe(first()); //httpClient.post<tipo_da_colecao>(API, dados)
    if(record._id){
      //console.log('update');
      return this.update(record);
    } else {
      //console.log('create')
      return this.create(record);
    }
  }

  private create(record: Partial<Course>){
    return this.httpClient.post<Course>(this.API, record).pipe(first()); //criar um curso novo
  }

  private update(record: Partial<Course>){
    return this.httpClient.put<Course>(`${this.API}/${record._id}`, record).pipe(first()); //ira retornar o curso selecionado

  }
}
