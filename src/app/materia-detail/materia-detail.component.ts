import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia';
import { ActivatedRoute}from '@angular/router'
import { Location } from '@angular/common';
import { MateriaService } from '../materia.service';
@Component({
  selector: 'app-materia-detail',
  templateUrl: './materia-detail.component.html',
  styleUrls: ['./materia-detail.component.css']
})
export class MateriaDetailComponent  implements OnInit{
materia : Materia | undefined;

constructor(
private route:ActivatedRoute,
private materiaService : MateriaService,
private location : Location
){}

ngOnInit(): void {
  this.getMateria();
}

getMateria(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.materiaService.getMateria(id)
    .subscribe(materia => this.materia = materia);
};
goBack(): void{
this.location.back();
}
}
