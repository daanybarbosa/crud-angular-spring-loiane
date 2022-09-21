import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Declarando as rotas globalmente
  { path: '', pathMatch: 'full' ,redirectTo: 'courses'}, //caminho vazio

  //configurar a rota - rota de lazy loading
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
