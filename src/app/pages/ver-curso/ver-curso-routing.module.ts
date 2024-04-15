import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerCursoComponent } from './ver-curso.component';

const routes: Routes = [
  {
    path: '',
    component: VerCursoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerCursoRoutingModule { }
