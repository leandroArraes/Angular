import { Injectable } from '@angular/core';
import { Cursos } from '../Cursos'; //importando a interface para poder utilizar 
import { animateChild } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  
  private apiUrl = 'http://localhost:3000/cursos'

  constructor(private http:HttpClient) { }

  remover(cursos:Cursos[],curso:Cursos){
    console.log('Ativando Service');
    return cursos.filter((a)=> curso.nome !== a.nome)
  }

  getAll():Observable<Cursos[]>{
    return this.http.get<Cursos[]>(this.apiUrl);

  }
}
