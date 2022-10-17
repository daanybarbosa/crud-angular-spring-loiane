import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  //Relacionamento entre componentes Filho/Pai/Mãe
  //@Input() - tudo que vai entrar para esse componente
  @Input() courses: Course[] = [];

  //@Output - todos os eventos que estão saindo desse componente
  @Output() add = new EventEmitter(false); //emissor de eventos

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true); //irá emitir um valor para o botao de adicionar
  }
}
