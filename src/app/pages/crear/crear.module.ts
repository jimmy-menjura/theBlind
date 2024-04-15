import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearRoutingModule } from './crear-routing.module';
import { CrearComponent } from './crear.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CrearComponent],
  imports: [
    CommonModule,
    CrearRoutingModule,
    ReactiveFormsModule
  ]
})
export class CrearModule { }
