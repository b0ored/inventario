import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { InventarioComponent } from './inventario.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({
  declarations: [InventarioComponent, AgregarComponent, ListaComponent],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    SharedModule
  ]
})
export class InventarioModule { }
