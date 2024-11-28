import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-tranformaciones',
  templateUrl: './menu-tranformaciones.component.html',
  styleUrls: ['./menu-tranformaciones.component.css']
})
export class MenuTranformacionesComponent implements OnInit {
  personajeId: number = 0;
  personajeName: string = '';
  transformaciones: any[] = [];
  transformacionSeleccionada: any = null; // Transformación seleccionada para editar
  modalVisible: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

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
        });
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
    this.router.navigate([`/transformaciones/${nextId}`]).then(() => {
      window.location.reload();
    });
  }

  previousPersonaje(): void {
    const previousId = this.personajeId - 1;
    if (previousId > 0) {
      this.router.navigate([`/transformaciones/${previousId}`]).then(() => {
        window.location.reload();
      });
    }
  }
}
