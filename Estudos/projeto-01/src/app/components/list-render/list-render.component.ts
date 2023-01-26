import { Component,OnInit } from '@angular/core';
import { Cursos } from 'src/app/Interface/Cursos';
import { ListService } from 'src/app/service/list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
tecnologia : Cursos [] =[ 
  {id:1,nome:"Javascript" ,type:"front-end",horas:150},
  {id:2,nome:"Typescript",type:"front-end",horas:150},
  {id:3,nome:"Java",type:"Back-end",horas:150},
  {id:4,nome:"Python",type:"Back-end",horas:150}
];

cursos: Cursos[] = [];


showTipo:string = '';

//alinhado com a interface
mostrarTipo(curso : Cursos ): void {
this.showTipo = `${curso.nome} é do tipo ${curso.type}`
}

constructor (private listService:ListService){ }

// Remover itens de uma lista
removerCurso(curso:Cursos){
  console.log('removendo curso');
  this.tecnologia = this.listService.remover(this.tecnologia,curso)
}

getCursos():void{
  this.listService.getAll().subscribe((cursos) => (this.cursos = cursos));
}
}
