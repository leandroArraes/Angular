import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Leandro';
  graduacao = 'Ads';

  endereco = {
    rua: 'Araujo Lima',
    numero: '18',
    bairro: 'Tijuca',
    cidade: 'Rio de janeiro'
  };

  title = 'NovoTeste';

  estilop1 = 'estilo'
  

}
