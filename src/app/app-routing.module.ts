import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './modules/inventario/inventario.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then (m => m.LoginModule)
  },
  {
    path: 'inventario',
    component: InventarioComponent,
    loadChildren: () => import('./modules/inventario/inventario.module').then (m => m.InventarioModule)
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
