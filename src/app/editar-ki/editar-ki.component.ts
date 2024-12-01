import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Transformacion {
  id: number;
  name: string;
  ki: number;
  character: {
    id: number;
    name: string;
  };
}

@Component({
  selector: 'app-editar-ki',
  templateUrl: './editar-ki.component.html',
  styles: []
})
export class EditarKiComponent implements OnInit {
  transformacion: Transformacion | null = null;
  kiForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    // Initialize the form with default values
    this.kiForm = this.formBuilder.group({
      ki: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    // Get transformation ID from route
    const transformacionId = this.route.snapshot.paramMap.get('id');

    if (transformacionId) {
      // Fetch transformation details
      this.http.get<Transformacion>(`https://dragonball-api.com/api/transformations/${transformacionId}`)
        .subscribe(
          (data: Transformacion) => {
            this.transformacion = data;

            // Retrieve saved Ki from localStorage, fallback to original Ki
            const savedKi = localStorage.getItem(`ki-${data.id}`);
            const kiValue = savedKi ? parseFloat(savedKi) : data.ki;

            // Update form with Ki value
            this.kiForm.patchValue({
              ki: kiValue
            });
          },
          (error) => {
            console.error('Error al obtener los datos de la transformación:', error);
            // Redirect back or show error
            this.router.navigate(['/transformaciones']);
          }
        );
    }
  }

  onSubmit(): void {
    if (this.kiForm.valid && this.transformacion) {
      // Update Ki value in local storage
      const newKi = this.kiForm.get('ki')?.value;
      if (newKi !== null && newKi !== undefined) {
        localStorage.setItem(`ki-${this.transformacion.id}`, newKi.toString());

        // Navigate back to transformations
        this.router.navigate(['/transformaciones', this.transformacion.character.id]);
      }
    }
  }

  cancelEdit(): void {
    // Navigate back to transformations
    if (this.transformacion) {
      this.router.navigate(['/transformaciones', this.transformacion.character.id]);
    }
  }
}
