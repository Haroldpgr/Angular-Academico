import { Component } from '@angular/core';
import { Materia } from '../materia';
import { MATERIA } from '../mock-materia';
import { MateriaService } from '../materia.service';
@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent {
  materias = MATERIA;
  materia :Materia []= [];
  
  selectedMateria?: Materia;
  constructor(private materiaService: MateriaService) {}

ngOnInit(): void{
  this.getMateria();
}

onSelect(materia: Materia): void {

  this.selectedMateria = materia;

}
getMateria() : void{
  this.materiaService.getMateria()
  .subscribe ( materia =>this.materia = materia);
}
  };

