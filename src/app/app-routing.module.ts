import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { MateriaComponent } from './materia/materia.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MateriaDetailComponent } from './materia-detail/materia-detail.component';
const routes : Routes=[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component:  MateriaDetailComponent },
  {path:'dashboard', component: DashboardComponent},
  {path:'materia', component: MateriaComponent}
];
@NgModule({
imports:[ RouterModule.forRoot(routes)],
exports:[RouterModule]
 

})
export class AppRoutingModule { }
