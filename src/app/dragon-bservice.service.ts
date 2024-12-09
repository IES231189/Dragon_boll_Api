import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DragonBServiceService {
  private apiUrl = 'https://dragonball-api.com/api/characters'

  constructor(private http: HttpClient) { }

  obtenerPersonajes(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?limit=10`);
  }

  getCharacterDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  actualizarKi(id: number, ki: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, { ki });
  }

  obtenerTransformaciones(personajeId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${personajeId}`);
  }
}

//hola a todos, esto es para poder hacer merge

var a = 10;
