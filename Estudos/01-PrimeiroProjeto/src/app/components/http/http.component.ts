import { Component } from '@angular/core';
import { Cursos } from 'src/app/Interface/Cursos';
import { ListService } from 'src/app/service/list.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {

  cursos: Cursos[]=[];

  constructor (private listService:ListService){ }

  getCursos():void{
    this.listService.getAll().subscribe((cursos) => (this.cursos = cursos));
  }

  removerHttp(curso:Cursos){
    this.cursos = this.cursos.filter((a)=> curso.nome !== a.nome)
    this.listService.removeHttP(curso.id).subscribe();
    //this.tecnologia = this.listService.remover(this.tecnologia,curso)
  }
  

}
