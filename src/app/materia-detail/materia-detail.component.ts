import { Component, Input } from '@angular/core';
import { Materia } from '../materia';


@Component({
  selector: 'app-materia-detail',
  templateUrl: './materia-detail.component.html',
  styleUrls: ['./materia-detail.component.css']
})
export class MateriaDetailComponent {
@Input()
materia?: Materia;

}
