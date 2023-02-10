import { Component } from '@angular/core';
import { ListService } from 'src/app/service/list.service';
import { Formacao } from 'src/app/Interface/Formacao';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.css']
})
export class FormacaoComponent {

  constructor (private listService:ListService){ };

  formacao: Formacao ={graduacao :'',faculdade:'',curso :'',modulo: 0};

  getformacao():void{
    this.listService.getFormacao().subscribe((formacao)=>(this.formacao = formacao));
    };
    
for = this.getformacao();
}
