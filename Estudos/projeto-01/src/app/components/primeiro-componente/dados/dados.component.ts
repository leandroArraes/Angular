import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {
  @Input() ender! : {rua: string,numero: string ,bairro: string,cidade:string};




}
