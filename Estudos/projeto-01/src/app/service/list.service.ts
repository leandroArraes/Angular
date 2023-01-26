import { Injectable } from '@angular/core';

import { Cursos } from '../Interface/Cursos'; //importando a interface para poder utilizar 
import { Endereco } from '../Interface/Endereco';

import { animateChild } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  
  private apiUrl = 'http://localhost:3000/cursos'
  private apiUrlEnd = 'http://localhost:3000/endereco'

  constructor(private http:HttpClient) { }

  remover(cursos:Cursos[],curso:Cursos){
    console.log('Ativando Service');
    return cursos.filter((a)=> curso.nome !== a.nome)
  }

  getAll():Observable<Cursos[]>{
    return this.http.get<Cursos[]>(this.apiUrl);

  }

  getItem(id: number): Observable<Cursos>{
    return this.http.get<Cursos>(`${this.apiUrl}/${id}`);


  }

  getEndereco(): Observable<Endereco>{
    return this.http.get<Endereco>(this.apiUrlEnd);
  }

}
