import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
  nome: string = "Leandro Arraes" ;
  idade: number = 31;
  eCivil: string = 'casado'
  filhos: number = 2
  curso: string = "Analise e desenvolvimento de sistemas";

  
}
