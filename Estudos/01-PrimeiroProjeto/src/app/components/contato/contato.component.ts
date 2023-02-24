import { Component } from '@angular/core';
import { ListService } from 'src/app/service/list.service';
import { Contato } from 'src/app/Interface/Contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

constructor (private listService:ListService){};

contato : Contato = {Email:'',Telefone:'',LinkDin:'',gitHub:''};

getContato():void {
this.listService.getCtt().subscribe((contato)=>(this.contato=contato));
};

ctt= this.getContato();
}
