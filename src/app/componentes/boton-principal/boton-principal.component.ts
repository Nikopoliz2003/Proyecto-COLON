import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-principal',
  templateUrl: './boton-principal.component.html',
  styleUrls: ['./boton-principal.component.css']
})
export class BotonPrincipalComponent {
  @Input() nombreBoton: string = "title"
}
