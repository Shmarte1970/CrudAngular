import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interfaces/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.css']
})
export class ListEmpresasComponent implements OnInit{
    listEmpresas: Empresa [] =[
     
  ]


  constructor(private _productService: EmpresaService) {}

  ngOnInit(): void {
    this.getlistEmpresa()
      
  }

  getlistEmpresa(){
    this._productService.getListEmpresas().subscribe((data) =>{
      this.listEmpresas = data;
    })
  }

}
