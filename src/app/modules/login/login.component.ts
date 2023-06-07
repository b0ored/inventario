import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formu: FormGroup;
  loading: Boolean = false;
  
  constructor(private _fb: FormBuilder, private _router: Router, private _snackBar: MatSnackBar) {
    this.formu = this._fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  ingresar(): void {
    const usuario = this.formu.value.usuario;
    const password = this.formu.value.password;

    if (usuario == "admin" && password == "123") {
      //Redirecciona al dashboard
      this.entrar();
    } else {
      //error
      this.error();
      this.formu.reset();
    }
  }

  error(): void {
    this._snackBar.open('Error al ingresar usuario o contraseña', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  entrar(): void {
    this.loading = true;
    setTimeout(() => {
      this._router.navigateByUrl('/inicio');
    }, 1500);
  }
}
