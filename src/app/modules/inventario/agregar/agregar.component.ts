import { Component, OnInit } from '@angular/core';
import { ScannerService } from 'src/app/shared/services/scanner.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  code!: string;


  constructor(private _scannerService: ScannerService) { }

  ngOnInit(): void {
    this.code = this._scannerService.getCode();
  }

}
