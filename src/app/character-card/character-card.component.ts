import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-character-card',
  standalone: false,

  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

  constructor(private router: Router) {
  }
  @Input() personaje: any;

  verTransformaciones(id: number): void {
    console.log(`Redirigiendo a las transformaciones del personaje con ID: ${id}`);
    this.router.navigate(['/transformaciones', id]);
    // Aquí puedes agregar la lógica de redirección (usando el router, por ejemplo)
  }
}
