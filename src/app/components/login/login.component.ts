import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsuariosService} from "../../services/usuarios.service";
import {LoginUsuario} from "../models/login-usuario";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  logForm!: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private router: Router,
               private usuariosService: UsuariosService) {
  }

  nombreIngresado: string = '';
  passIngresada: string = '';

  ngOnInit(): void {

    this.logForm = new FormGroup({
      nombreUsuario: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', Validators.required)
    });
  }


  onLogin(loginUsuario: LoginUsuario): void {

    this.nombreIngresado = this.logForm.get("nombreUsuario")?.value;
    this.passIngresada = this.logForm.get("password")?.value;

    const loginU = {
      nombre_usuario:this.nombreIngresado,
      contrasenia:this.passIngresada
    }

    //console.log(loginU);

    this.usuariosService.loginUsuarios(loginU).subscribe( {
      next: data =>{
        console.log(data);
        localStorage.setItem("usuario", data.nombre_usuario);
        this.router.navigate(['/home']);
        Swal.fire('Usuario logeado exitosamente');
      }

        // this.router.navigate(['/home']);
    })
  }


}
