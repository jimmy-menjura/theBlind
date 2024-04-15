import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crear',
    pathMatch: 'full'
  },
  {
    path: 'crear',
    loadChildren: () => import('./pages/crear/crear.module').then( m => m.CrearModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/listar/listar.module').then( m => m.ListarModule)
  },
  {
    path: 'verCurso/:id',
    loadChildren: () => import('./pages/ver-curso/ver-curso.module').then( m => m.VerCursoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
