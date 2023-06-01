import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LectorComponent } from './components/lector/lector.component';
import { LoginComponent } from './components/login/login.component';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, LectorComponent, LoginComponent],
  imports: [BrowserModule, ZXingScannerModule, MatFormFieldModule, BrowserAnimationsModule, MatButtonModule, MatDividerModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
