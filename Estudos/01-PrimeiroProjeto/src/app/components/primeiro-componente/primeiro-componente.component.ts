import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Endereco } from 'src/app/Interface/Endereco';
import { AppComponent } from 'src/app/app.component';
import { ListService } from 'src/app/service/list.service';
import { OnInit } from '@angular/core';

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
    // dessa forma eu consigo chamar a função dentro do componente 
    //sem ela ficar sendo chamada multiplas vezes 
  end = this.getendereco();

}
