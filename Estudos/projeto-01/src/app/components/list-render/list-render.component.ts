import { Component } from '@angular/core';
 import { Cursos } from 'src/app/Cursos';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
tecnologia : Cursos [] =[ 
  {name:"Javascript" ,type:"front-end"},
  {name:"Typescript",type:"front-end"},
  {name:"Java",type:"Back-end"},
  {name:"Python",type:"Back-end"}
]

showTipo:string = '';

//alinhado com a interface
mostrarTipo(curso : Cursos ): void {
this.showTipo = `${curso.name} é do tipo ${curso.type}`
}
}
