import { Component } from '@angular/core';
import { Materia } from '../materia';
import { MATERIA } from '../mock-materia';
@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent {
  materias = MATERIA;

  selectedMateria?: Materia;

onSelect(materia: Materia): void {

  this.selectedMateria = materia;
}
  };

