import { Injectable } from '@angular/core';

import { Cursos } from '../Interface/Cursos'; //importando a interface para poder utilizar 
import { Endereco } from '../Interface/Endereco';

import { animateChild } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Formacao } from '../Interface/Formacao';
import { Contato } from '../Interface/Contato';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  
  private apiUrl = 'http://localhost:3000/cursos'
  private apiUrlEnd = 'http://localhost:3000/endereco'
  private apiUrlForm = 'http://localhost:3000/formacao'
  private apiUrlContato = 'http://localhost:3000/contato'

  constructor(private http:HttpClient) { }

  remover(cursos:Cursos[],curso:Cursos){
    console.log('Ativando Service');
    return cursos.filter((a)=> curso.nome !== a.nome)
  }

  removeHttP(id:number){
    return this.http.delete<Cursos>(`${this.apiUrl}/${id}`)
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

  getFormacao(): Observable<Formacao>{
    return this.http.get<Formacao>(this.apiUrlForm);
  }

  getCtt(): Observable<Contato>{
    return this.http.get<Contato>(this.apiUrlContato);
  }
}
