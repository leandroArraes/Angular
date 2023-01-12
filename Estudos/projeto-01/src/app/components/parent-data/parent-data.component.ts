import { NgClass } from '@angular/common';
import { Component,Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  @Input() formacao! : {curso: string, graduacao: string, faculdade:string ,modulo:number} ;
  @Input() curso:string =''  ; 
  @Input() title:string =''  ;
  @Input() faculdade:string= '';
  

}
