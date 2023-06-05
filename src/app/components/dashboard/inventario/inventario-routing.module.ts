import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './inventario.component';
import { AgregarInventarioComponent } from './agregar-inventario/agregar-inventario.component';
const routes: Routes = [
  { path: '', component: InventarioComponent, children: [
    { path: '/agregar', component: AgregarInventarioComponent },
  ]  
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
