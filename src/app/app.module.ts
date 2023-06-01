import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { LectorComponent } from './components/lector/lector.component';
//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [AppComponent, LoginComponent, LectorComponent],
  imports: [
    BrowserModule, 
    ZXingScannerModule, 
    AppRoutingModule, 
    BrowserAnimationsModule, 
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
