import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DragonBServiceService} from '../dragon-bservice.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-personajes',
  standalone: false,

  templateUrl: './menu-personajes.component.html',
  styleUrl: './menu-personajes.component.css'
})
export class MenuPersonajesComponent {


  personajes: any[] = [];
  personajesFiltrados: any[] = []; // Lista para los personajes que coincidan con la búsqueda
  terminoBusqueda: string = ''; // Para almacenar el texto ingresado en el input


  constructor(private dragonBService: DragonBServiceService, private router: Router) {
  }


  ngOnInit(): void {
    this.dragonBService.obtenerPersonajes().subscribe(
      (data) => {
        this.personajes = data.items; // Cargar los personajes
        this.personajesFiltrados = this.personajes; // Inicialmente todos los personajes se muestran
      },
      (error) => {
        console.error('Error al obtener los personajes:', error);
      }
    );
  }

  buscarPersonaje(termino: string): void {
    const terminoLower = termino.toLowerCase(); // Convertir el término a minúsculas para búsqueda insensible a mayúsculas
    this.personajesFiltrados = this.personajes.filter((personaje) =>
      personaje.name.toLowerCase().includes(terminoLower) // Comparar nombres
    );
  }

  verTransformaciones(id: number): void {
    this.router.navigate(['/transformaciones', id]); // Redirige a la página con el ID del personaje
  }


}
