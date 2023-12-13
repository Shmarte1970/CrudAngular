import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interfaces/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.css']
})
export class ListEmpresasComponent implements OnInit {
  listEmpresas: Empresa[] = []
  loading: boolean = false;


  constructor(private _productService: EmpresaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getlistEmpresa()

  }

  getlistEmpresa() {

    this.loading = true;
    this._productService.getListEmpresas().subscribe((data) => {
      this.listEmpresas = data;
      this.loading = false;
    })
  }

  deleteEmpresa(id: number) {
    this.loading = true;
    this._productService.deleteEmpresa(id).subscribe(() => {
      this.getlistEmpresa();
      this.toastr.warning('Empresa eliminada correctamente', 'Empresa Eliminada');
    })
  }

 
  

}
