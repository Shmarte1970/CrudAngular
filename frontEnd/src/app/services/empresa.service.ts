import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empresa } from '../interfaces/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  
  private myAppUrl: string;
  private myApiUrl: string;


  constructor(private http: HttpClient) { 
    this.myAppUrl =  environment.endpoint ;
    this.myApiUrl = 'api/usuarios/'

  }

  getListEmpresas(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
  
  deleteEmpresa(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  newEmpresa(empresa: Empresa): Observable<void>{
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, empresa)
  }


}
