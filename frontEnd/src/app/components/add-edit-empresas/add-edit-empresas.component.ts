import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Empresa } from 'src/app/interfaces/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-add-edit-empresas',
  templateUrl: './add-edit-empresas.component.html',
  styleUrls: ['./add-edit-empresas.component.css']
})
export class AddEditEmpresasComponent implements OnInit {

  form: FormGroup;

  constructor (private fb: FormBuilder, private _productService: EmpresaService, private toastr: ToastrService) {

    this.form = this.fb.group({
      usuarios: ['', Validators.required],
      telefono: ['', Validators.required],
      poblacion: ['', Validators.required],
      dadoDeAlta: ['', Validators.required],

    })

   }

  ngOnInit(): void {
      
  }

  addUsuario() {
    
     const user : Empresa = {
        usuarios: this.form.value.usuarios,
        telefono: this.form.value.telefono,
        poblacion: this.form.value.poblacion,
        dadoDeAlta: this.form.value.dadoDeAlta
     }

    this._productService.newEmpresa(user).subscribe(() => {
      this.toastr.success('Usuario agregado correctamente','Usuario agregado');
      this.form.reset();
    })

  }

}
