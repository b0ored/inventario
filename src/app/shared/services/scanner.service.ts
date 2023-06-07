import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  code: string = '';

  constructor() { }
  
  getCode(): string {
    return this.code;
  }

  scannCode(code: string): void {
    this.code = code;
  }
}
