import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DragonBServiceService {

  private apiUrl = 'https://dragonball-api.com/api/characters?limit=10'

  constructor(private http: HttpClient) { }

  obtenerPersonajes(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  actualizarKi(id: number, ki: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/transformaciones/${id}`, { ki });
  }

  obtenerTransformaciones(personajeId: number): Observable<any> {
    const url = `${this.apiUrl}/${personajeId}`;  // Crear la URL usando el id del personaje
    return this.http.get<any>(url);  // Realizar la solicitud GET
  }
}
