import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { CoursesService } from '../../services/courses.service';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses', //nome do componente/tag do html para exportar esse componente
  templateUrl: './courses.component.html', //endereço do arquivo que tem o arquivo em html
  styleUrls: ['./courses.component.scss'] //estilo - referencia para o arquivo de css
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>; //colocar o $ na variavel, ajuda a identificar que é um Observable

  constructor (
      private coursesService: CoursesService,
      public dialog: MatDialog,
      private router: Router,
      private route: ActivatedRoute
    ) {

    //Observable
    this.courses$ = this.coursesService.list()
      .pipe(
        catchError(error => {
          //mensagem para o usuario
          this.onError('Erro ao carregar cursos.');
          //esta aguardando um Observable mesmo que vazio para exibir o erro
          return of([])
        })
      );

  }

  //mensagem de erro para o usuario
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

  onAdd(){
    //roteamento
    this.router.navigate(['new'], {relativeTo: this.route});
    console.log('onAdd');
  }

}
