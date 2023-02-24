import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {

  myNumber:Number = 0;

  onchangeNumber(){
    this.myNumber = Math.floor(Math.random() * 10);
  }
// usado para se comunicar com outros componentes atravez das funções 
}
