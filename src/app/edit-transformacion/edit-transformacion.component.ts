import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-transformacion',
  templateUrl: './edit-transformacion.component.html',
  styleUrls: ['./edit-transformacion.component.css']
})
export class EditTransformacionComponent implements OnInit {
  transformacion: any = null;
  personajeId: number = 0;
  transformacionId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.personajeId = Number(this.route.snapshot.paramMap.get('id'));
    this.transformacionId = Number(this.route.snapshot.paramMap.get('transformacionId'));

    // Cargar la transformación desde la API o el listado de transformaciones
    this.http
      .get(`https://dragonball-api.com/api/transformations/${this.transformacionId}`)
      .subscribe((data: any) => {
        this.transformacion = data;
      });
  }

  guardarCambios(): void {
    // Aquí puedes hacer un PUT/PATCH a la API o actualizar localmente
    this.http
      .put(`https://dragonball-api.com/api/transformations/${this.transformacionId}`, this.transformacion)
      .subscribe(() => {
        // Navegar de vuelta a la vista de transformaciones
        this.router.navigate([`/transformaciones/${this.personajeId}`]);
      });
  }

  cancelar(): void {
    this.router.navigate([`/transformaciones/${this.personajeId}`]);
  }
}
