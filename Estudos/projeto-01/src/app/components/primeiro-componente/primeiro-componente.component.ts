import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
 @Input() endereco! : {rua: string,numero: string ,bairro: string,cidade:string};
 @Input() textoLateralEsquerda = '';
  nome: string = "Leandro Arraes" ;
  idade: number = 31;
  eCivil: string = 'casado';
  filhos: number = 2
    
}
