import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerCursoRoutingModule } from './ver-curso-routing.module';
import { VerCursoComponent } from './ver-curso.component';


@NgModule({
  declarations: [VerCursoComponent],
  imports: [
    CommonModule,
    VerCursoRoutingModule
  ]
})
export class VerCursoModule { }
