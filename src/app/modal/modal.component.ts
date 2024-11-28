import { Component, Input, Output } from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Input() personaje: any;
  @Output() cerrarModalEvent = new EventEmitter<void>();

  cerrarModal() {
    this.cerrarModalEvent.emit();
  }
}
