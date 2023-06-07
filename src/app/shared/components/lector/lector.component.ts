import { Component, Input, OnInit } from '@angular/core';
import { ScannerService } from '../../services/scanner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lector',
  templateUrl: './lector.component.html',
  styleUrls: ['./lector.component.css']
})


export class LectorComponent implements OnInit {

  public cameras:MediaDeviceInfo[]=[];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled=false;
  public results:string[]=[];
  @Input() route: string = '';
  constructor(private _scannerService: ScannerService, private _router: Router) { }

  ngOnInit(): void {
  }

  camerasFoundHandler(cameras: MediaDeviceInfo[]){
    this.cameras=cameras;
    this.selectCamera(this.cameras[0].label);
  }

  scanSuccessHandler(event:string){
    console.log(event);
    this.results.unshift(event);
    console.log(event);
    
    this.scannCode(event);
    this._router.navigateByUrl(this.route)
  }

  selectCamera(cameraLabel: string){    
    this.cameras.forEach(camera=>{
      if(camera.label.includes(cameraLabel)){
        this.myDevice=camera;
        console.log(camera.label);
        this.scannerEnabled=true;
      }
    })    
  }
  

  scannCode(code: string) : void {
    this._scannerService.scannCode(code);
  }
  
}
