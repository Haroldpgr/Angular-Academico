import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia';
import { MateriaService } from '../materia.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  materias :Materia[]=[];

  constructor(private materiaService: MateriaService){}
  ngOnInit(): void {
      this.getMateria();
  }
  getMateria():void{
this.materiaService.getMaterias()
.subscribe(materia => this.materias = materia.slice(1,5));
  }

}
