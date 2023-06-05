import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import {HttpClientModule } from '@angular/common/http';

//Angular
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ZXingScannerModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [
    ZXingScannerModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class SharedModule { }
