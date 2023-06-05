import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: 'reportes', component: ReportesComponent },
  ]  
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
