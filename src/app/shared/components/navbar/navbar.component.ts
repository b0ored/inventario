import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [
    {
      "nombre":"Inicio",
      "redirect":"/inicio"
  },
  {
      "nombre":"Inventario",
      "redirect":"/inventario"
  },
  {
      "nombre":"Reportes",
      "redirect":"/reportes"
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
