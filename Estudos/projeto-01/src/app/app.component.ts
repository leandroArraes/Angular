import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = 'Leandro';
  

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

}
