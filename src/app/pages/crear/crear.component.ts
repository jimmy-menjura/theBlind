import { Component, OnInit } from '@angular/core';
import { Validators , FormGroup, UntypedFormGroup, UntypedFormBuilder, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  credentialForm: FormGroup;

  constructor(public fb: FormBuilder,public router:Router) {
    this.credentialForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.min(6)]],
      tipo: ['',[Validators.required]],
      ciudad: ['',[Validators.required]],
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      telefono: ['',[Validators.required]],
      direccion: ['',[Validators.required]],
    })
   }

  ngOnInit(): void {
  }
  crear(form:FormGroup){
    const guardar ={
      email: form.value.email,
      password: form.value.password,
      tipo: form.value.tipo,
      ciudad: form.value.ciudad,
      nombre: form.value.nombre,
      apellido: form.value.apellido,
      telefono: form.value.telefono,
      direccion: form.value.direccion,
    }
    localStorage.setItem('user',JSON.stringify(guardar));
    this.router.navigate(['/listar'])
  }

}
