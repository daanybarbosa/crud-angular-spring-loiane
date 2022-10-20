import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Course } from './../model/course';
import { CoursesService } from './../services/courses.service';

  /**
   * criar um resolver (guarda de rotas), ao clicar no curso para editar,
   * irá obter o id deste curso e precisará carregar todas as informações
   * antes de exibir na tela e fazer o redirecionamento, dependendo do tamanho os dados não é uma boa opção.
   * Caso os dados sejam pesados, o ideal é trata-lo dentro do formulario.
   * No nosso caso, são dados pequenos (id, nome e categoria) então será viavel utilizar o resolver
   */

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<Course> {

  constructor(private service: CoursesService){}

  //ira obter uma copia da rota
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
    //se na rota existe parametros e se exibe o id
    if (route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }
    //caso nao encontre o id, será inicializa-lo como vazio
    return of({_id: '', name: '', category: ''});
  }
}
