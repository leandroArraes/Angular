import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Endereco } from 'src/app/Interface/Endereco';
import { ListService } from 'src/app/service/list.service';
import { NavComponent } from '../nav/nav.component';
import { windowCount } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menu: EventEmitter<any> = new EventEmitter();
  
  show:boolean = false;

  botao(){
    this.show = !this.show
  }

  abrirNav(){
     this.menu.emit();
  }
  
  hblmenu:boolean = false

  

  tela:number = window.screen.width;



  screanview(){
    if(window.screen.width < 900){
       this.hblmenu = true
    }
  }
  
  a = this.screanview()
}
    
  

