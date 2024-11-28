import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {DragonBServiceService} from '../dragon-bservice.service';
import {Input} from "@angular/core";
@Component({
  selector: 'app-menu-tranformaciones',
  standalone: false,

  templateUrl: './menu-tranformaciones.component.html',
  styleUrl: './menu-tranformaciones.component.css'
})
export class MenuTranformacionesComponent implements OnInit{

  personajeId: number = 0;
  personajeName: string = '';
  transformaciones: any[] = [];
  currentTransformacion: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    // Obtener el ID del personaje de la URL
    this.personajeId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.personajeId) {
      // Llamar a la API para obtener los datos del personaje
      this.http
        .get(`https://dragonball-api.com/api/characters/${this.personajeId}`)
        .subscribe((data: any) => {
          this.transformaciones = data.transformations;
          this.personajeName = data.name;

          // Establecer la primera transformación como la actual
          this.currentTransformacion = this.transformaciones[0];
        });
    }
  }

  // Función para ir al siguiente personaje
  nextPersonaje(): void {
    const nextId = this.personajeId + 1;  // Incrementar el ID (ajustar según tu lógica)
    this.router.navigate([`/transformaciones/${nextId}`]).then(() => {
      window.location.reload();  // Forzar la recarga de la página
    });
  }

  // Función para ir al personaje anterior
  previousPersonaje(): void {
    const previousId = this.personajeId - 1;
    if (previousId > 0) {
      this.router.navigate([`/transformaciones/${previousId}`]).then(() => {
        window.location.reload();  // Forzar la recarga de la página
      });
    }
  }

  // Función para guardar el valor de Ki en localStorage
  saveKi(transformacion: any): void {
    localStorage.setItem(`ki-${transformacion.id}`, transformacion.ki);
  }
}
