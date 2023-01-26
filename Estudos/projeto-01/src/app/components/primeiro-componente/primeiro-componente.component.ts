import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Endereco } from 'src/app/Interface/Endereco';
import { AppComponent } from 'src/app/app.component';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
  
 @Input() ender! : {rua: string,numero: string ,bairro: string,cidade:string};
 @Input() textoLateralEsquerda = '';
  nome: string = "Leandro Arraes" ;
  idade: number = 31;
  eCivil: string = 'casado';
  filhos: number = 2

  ok= true;

  endereco: Endereco = {rua:'',numero: '' ,bairro: '',cidade:''};

  constructor (private listService:ListService){ }

  getendereco():void{
    this.listService.getEndereco().subscribe((endereco)=>(this.endereco = endereco));
  };

  //endereco : {rua: string,numero: string ,bairro: string,cidade:string};

 // constructor(private enderc : ActivatedRoute) {
  //  this.endereco =this.enderc.snapshot.params['endereco'];
 /// };

 /* ender = {
  rua: 'Araujo Lima',
  numero: '18',
  bairro: 'Tijuca',
  cidade: 'Rio de janeiro'
  
}; */
    
}
