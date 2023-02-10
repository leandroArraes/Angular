import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';
import { Cursos } from 'src/app/Interface/Cursos';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent {

  cursos?: Cursos;
  

constructor(private listService: ListService,private route: ActivatedRoute){
  this.getCursos()
};

getCursos(){
  const id = Number(this.route.snapshot.paramMap.get('id')); 
  this.listService.getItem(id).subscribe((cursos)=>(this.cursos = cursos))
}






}
