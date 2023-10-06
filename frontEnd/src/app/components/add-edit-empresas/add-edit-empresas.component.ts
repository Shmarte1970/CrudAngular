import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  loading: boolean = false;
  id: number;

  constructor (private fb: FormBuilder, private _productService: EmpresaService, private toastr: ToastrService,
    private router: Router, private aRouter: ActivatedRoute) {

    this.form = this.fb.group({
      usuarios: ['', Validators.required],
      telefono: ['', Validators.required],
      poblacion: ['', Validators.required],
      dadoDeAlta: ['', Validators.required],

    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
   

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

    this.loading = true;
    this._productService.newEmpresa(user).subscribe(() => {
      this.toastr.success('Usuario agregado correctamente','Usuario agregado');
      this.form.reset();
      this.loading = false;
      this.router.navigate(['/']);
    })

  }

}
