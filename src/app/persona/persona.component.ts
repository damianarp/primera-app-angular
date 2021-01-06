import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombrePersona:string = "Damián";
  apellidoPersona:string = "Arp";
  edadPersona:number = 33;

}
