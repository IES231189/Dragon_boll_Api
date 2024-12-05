import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';
import {DragonBServiceService} from "../dragon-bservice.service";

@Component({
  selector: 'app-character-card',
  standalone: false,

  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {

<<<<<<< HEAD
  modalVisible = false;
  fullCharacterDetails: any = null;

  constructor(
    private router: Router,
    private dragonBService: DragonBServiceService
  ) {}

=======
  constructor(private router: Router) {
  }
  
>>>>>>> 2c114b9d5bfadd0c0248a5a6b123979932a201b8
  @Input() personaje: any;

  ngOnInit(): void {}

  abrirModal(personaje: any) {
    this.dragonBService.getCharacterDetails(personaje.id).subscribe(
      (data) => {
        this.fullCharacterDetails = data;
        this.modalVisible = true;
      },
      (error) => {
        console.error('Error fetching character details:', error);
      }
    );
  }

  cerrarModal() {
    this.modalVisible = false;
    this.fullCharacterDetails = null;
  }

  verTransformaciones(id: number): void {
    this.router.navigate(['/transformaciones', id]);
  }

}
