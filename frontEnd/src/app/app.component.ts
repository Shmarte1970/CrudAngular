import { Component } from '@angular/core';
import { EmpresaService } from './services/empresa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmpresaService],
})
export class AppComponent {
  title = 'frontEnd';
  constructor(private dataSvc: EmpresaService){}
  ngOnInit(): void {
    this.dataSvc.getListEmpresas().subscribe(data => {
      console.log(data);
    });
  }
}
