import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia';
import { MateriaService } from '../materia.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
  materias : Materia [] = [];

  constructor(private materiaService: MateriaService, private messageService: MessageService) {}

ngOnInit(): void{
  this.getMateria();
}


getMateria() : void{
  this.materiaService.getMaterias()
  .subscribe ( materia =>this.materias = materia);
}
  };

