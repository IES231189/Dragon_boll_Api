import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-tranformaciones',
  standalone: false,
  templateUrl: './menu-tranformaciones.component.html',
  styleUrl: './menu-tranformaciones.component.css'
})
export class MenuTranformacionesComponent implements OnInit {

  personajeId: number = 0;
  personajeName: string = '';
  transformaciones: any[] = [];
  currentTransformacion: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // Obtener el ID del personaje de la URL
    this.personajeId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.personajeId) {
      // Llamar a la API para obtener los datos del personaje
      this.http
        .get(`https://dragonball-api.com/api/characters/${this.personajeId}`)
        .subscribe(
          (data: any) => {
            // Verificar que los datos contengan transformaciones
            if (data && data.transformations) {
              this.transformaciones = data.transformations.map((transformacion: { id: any; ki: any; }) => ({
                ...transformacion,
                // Recuperar el Ki guardado de localStorage si existe
                ki: localStorage.getItem(`ki-${transformacion.id}`) || transformacion.ki
              }));
              this.personajeName = data.name;

              // Establecer la primera transformación como la actual
              this.currentTransformacion = this.transformaciones[0];
            } else {
              console.error('No se encontraron transformaciones para este personaje.');
            }
          },
          (error) => {
            console.error('Error al obtener los datos del personaje:', error);
          }
        );
    }
  }

  // Función para ir al siguiente personaje
  nextPersonaje(): void {
    const nextId = this.personajeId + 1;
    this.router.navigate([`/transformaciones/${nextId}`]).then(() => {
      window.location.reload();
    });


  }

  // Función para ir al personaje anterior
  previousPersonaje(): void {
    const previousId = this.personajeId - 1;
    if (previousId > 0) {
      this.router.navigate([`/transformaciones/${previousId}`]).then(() => {
        window.location.reload();
      });
    }
  }

  // Función para guardar el valor de Ki en localStorage
  saveKi(transformacion: any): void {
    localStorage.setItem(`ki-${transformacion.id}`, transformacion.ki);
  }
}
