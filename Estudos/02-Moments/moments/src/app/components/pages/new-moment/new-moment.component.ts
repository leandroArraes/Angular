import { Component ,OnInit} from '@angular/core';
import { Moment } from 'src/app/Moment';
@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  btnText= 'comportilhar!';


  ngOnInit():void{}

  async createhandler(moment : Moment){
    const formData = new FormData()

    formData.append("tile",moment.title);
    formData.append("description",moment.description);

    if (moment.image){
      formData.append('image',moment.image);
    }

    // todo
    
    // enviar par ao service
    
    //exibir mensagem 

    // redirect 

  }
  

}
