import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
tecnologias =[ 
  {name:"Javascript" ,type:"front-end"},
  {name:"Typescript",type:"front-end"},
  {name:"Java",type:"Back-end"},
  {name:"Python",type:"Back-end"}
]
}
