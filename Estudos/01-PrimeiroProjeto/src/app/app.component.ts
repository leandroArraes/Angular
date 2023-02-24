import { Component, Output ,Input} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = 'Leandro';
  
  geral ='geral ';
  

  formacao = {
    graduacao : 'Tecnologica',
    faculdade :' Senac Rio' ,
    curso : 'Analise e desenvolvimento de sistemas',
    modulo : 3
  };

  

  // Estilos
  title = 'title';
  estilop1 = 'estilo';
  textoLateralEsquerda ='textoLateralEsquerda'; 


// objetos
  ender = {
    rua: 'Araujo Lima',
    numero: '18',
    bairro: 'Tijuca',
    cidade: 'Rio de janeiro'
    
  };

  // links
  tec: string = "http://localhost:4200/list"


  
  show:boolean = true;

  mostrarNav():void{
    this.show = !this.show;
  }
}
