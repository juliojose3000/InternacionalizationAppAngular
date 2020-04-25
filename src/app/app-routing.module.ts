import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PelisComponent } from './components/pelis/pelis.component'
import { LibrosComponent } from './components/libros/libros.component'


const routes: Routes = [
  {path:'pelis',component: PelisComponent},
  {path:'libros',component: LibrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
