import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-tranformaciones',
<<<<<<< HEAD
  standalone: false,
=======
>>>>>>> 2c114b9d5bfadd0c0248a5a6b123979932a201b8
  templateUrl: './menu-tranformaciones.component.html',
  styleUrls: ['./menu-tranformaciones.component.css']
})
export class MenuTranformacionesComponent implements OnInit {
<<<<<<< HEAD

=======
>>>>>>> 2c114b9d5bfadd0c0248a5a6b123979932a201b8
  personajeId: number = 0;
  personajeName: string = '';
  transformaciones: any[] = [];
  transformacionSeleccionada: any = null; // Transformación seleccionada para editar
  modalVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
<<<<<<< HEAD
  ) { }
=======
  ) {}
>>>>>>> 2c114b9d5bfadd0c0248a5a6b123979932a201b8

  ngOnInit(): void {
    // Obtener el ID del personaje de la URL
    this.personajeId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.personajeId) {
      // Llamar a la API para obtener los datos del personaje
      this.http
        .get(`https://dragonball-api.com/api/characters/${this.personajeId}`)
<<<<<<< HEAD
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
=======
        .subscribe((data: any) => {
          this.transformaciones = data.transformations;
          this.personajeName = data.name;
        });
>>>>>>> 2c114b9d5bfadd0c0248a5a6b123979932a201b8
    }
  }

  editarTransformacion(transformacion: any): void {
    this.router.navigate([`/transformaciones/${this.personajeId}/editar/${transformacion.id}`]);
  }
  
  cerrarModal(): void {
    this.modalVisible = false;
    this.transformacionSeleccionada = null;
  }

  guardarTransformacion(transformacionActualizada: any): void {
    const index = this.transformaciones.findIndex(
      (t) => t.id === transformacionActualizada.id
    );
    if (index !== -1) {
      this.transformaciones[index] = { ...transformacionActualizada }; // Actualizar en la lista
    }
    localStorage.setItem(
      `ki-${transformacionActualizada.id}`,
      transformacionActualizada.ki
    );
    this.cerrarModal();
  }

  nextPersonaje(): void {
    const nextId = this.personajeId + 1;
<<<<<<< HEAD
    this.router.navigate([`/transformaciones/${nextId}`]);
=======
    this.router.navigate([`/transformaciones/${nextId}`]).then(() => {
      window.location.reload();
    });
>>>>>>> 2c114b9d5bfadd0c0248a5a6b123979932a201b8
  }

  previousPersonaje(): void {
    const previousId = this.personajeId - 1;
    if (previousId > 0) {
<<<<<<< HEAD
      this.router.navigate([`/transformaciones/${previousId}`]);
=======
      this.router.navigate([`/transformaciones/${previousId}`]).then(() => {
        window.location.reload();
      });
>>>>>>> 2c114b9d5bfadd0c0248a5a6b123979932a201b8
    }
  }
}
