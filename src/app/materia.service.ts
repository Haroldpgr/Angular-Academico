import { Injectable } from '@angular/core';
import { Materia } from './materia';
import { MATERIA } from './mock-materia';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private messageService: MessageService) {
   }

getMaterias(): Observable<Materia[]>{
  const materia = of (MATERIA);
 this.messageService.add('MateriaService: fetched materia');
  return materia;
}
getMateria(id: number): Observable<Materia> {
  const materia = MATERIA.find(h => h.id === id)!;
  this.messageService.add(`MateriaService: fetched materia id=${id}`);
  return of(materia);
}
}
