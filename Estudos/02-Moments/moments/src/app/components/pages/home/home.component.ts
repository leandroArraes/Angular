import { Component } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
// fasearch é para as buscas na home 
import { faSearch } from '@fortawesome/free-solid-svg-icons';
//envioromente para criar 
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // primeiro array para pegar os momentos do banco 
  allMoments: Moment[] = [];
  // segundo array é para fazer o filtro depois da busca
  moments:Moment[] =[];

  baseApiUrl = environment.baseApiUrl

  fasearch = faSearch;
  searchTerm : string ='';

  //todo searsh

  constructor(private momentService:MomentService){}

  ngOnInit():void{
    this.momentService.getMoments().subscribe((items)=>{
      const data = items.data;

      // este metodo é para alterar o formato da data criado no back end
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });
      this.allMoments = items.data;
      this.moments = items.data;
    });
   

  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter((moment) =>
      moment.title.toLowerCase().includes(value)
    );
  }
}
