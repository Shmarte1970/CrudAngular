import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empresa } from 'src/app/interfaces/empresa';

@Component({
  selector: 'app-add-edit-empresas',
  templateUrl: './add-edit-empresas.component.html',
  styleUrls: ['./add-edit-empresas.component.css']
})
export class AddEditEmpresasComponent implements OnInit {

  form: FormGroup;

  constructor (private fb: FormBuilder) {

    this.form = this.fb.group({
      usuario: ['', Validators.required],
      telefono: ['', Validators.required],
      poblacion: ['', Validators.required],
      dadodeAlta: ['', Validators.required],

    })

   }

  ngOnInit(): void {
      
  }

  addUsuario() {
     // console.log(this.form.value.usuario);
     const user : Empresa = {
        usuario: this.form.value.usuario,
        telefono: this.form.value.telefono,
        poblacion: this.form.value.poblacion,
        dadoDeAlta: this.form.value.dadoDeAlta
     }

     console.log(user);

  }

}
