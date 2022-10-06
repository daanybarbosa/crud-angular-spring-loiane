import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Declarando as rotas globalmente
  { path: '', pathMatch: 'full' ,redirectTo: 'courses'},
  //{ path: '', pathMatch: 'full' ,redirectTo: 'cursos'}, //caso queira mudar o nome da rota futuramente

  //configurar a rota - rota de lazy loading
  {
    path: 'courses',
    //path: 'cursos', //caso queira mudar o nome da rota futuramente
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
