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

  modalVisible = false;
  fullCharacterDetails: any = null;

  constructor(
    private router: Router,
    private dragonBService: DragonBServiceService
  ) {}

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
