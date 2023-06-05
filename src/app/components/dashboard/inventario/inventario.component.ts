import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  codigo: number;
  nombre: string;
  costo: number;
  stock: number;
}



@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  displayedColumns: string[] = ['codigo', 'nombre', 'costo', 'stock'];
  ELEMENT_DATA: PeriodicElement[] = [
    {codigo: 112233, nombre: 'Puerta', costo: 4200, stock: 16},
    {codigo: 143534, nombre: 'Ventana', costo: 4240, stock: 12}
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
