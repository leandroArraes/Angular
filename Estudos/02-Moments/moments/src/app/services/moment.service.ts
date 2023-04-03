import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Moment } from '../Moment';
import { Response } from '../Response';

import { environment } from 'src/environments/environment'; 
@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  createMoment(formData:FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
    }

    getMoment(id:number): Observable<Response<Moment>>{
      const url =`${this.apiUrl}/${id}`;
      return this.http.get<Response<Moment>>(url);
    }
    
    getMoments(): Observable<Response<Moment[]>>{
      return this.http.get<Response<Moment[]>>(this.apiUrl);
    }

    removeMoment(id:number){
      const url =`${this.apiUrl}/${id}`;
      return this.http.delete(url);


    }
  }

