import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interfaces/empresa';

@Component({
  selector: 'app-list-empresas',
  templateUrl: './list-empresas.component.html',
  styleUrls: ['./list-empresas.component.css']
})
export class ListEmpresasComponent implements OnInit{
    listEmpresas: Empresa [] =[
      {id: 1, usuario: `Armando Bronca`, telefono: `678995325`,  poblacion:`Castellbisbal`, dadoDeAlta: `Pedro Rios` },
      {id: 2, usuario: `Dolores Fuertes`, telefono: `696040483`,  poblacion:`Barcelona`, dadoDeAlta: `Angeles Soler` }
  ]


  constructor() {}

  ngOnInit(): void {
    
      
  }

  

}
