import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsuariosService} from "../../services/usuarios.service";
import {LoginUsuario} from "../models/login-usuario";
import {NuevoUsuario} from "../models/nuevo-usuario";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  createForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private usuariosService: UsuariosService) {
  }

  nombreIngresado: string = '';
  email: string = '';
  passIngresada: string = '';
  passReIngresada: string = '';

  ngOnInit(): void {

    this.createForm = new FormGroup({
      nombreUsuario: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onCreate(nuevoUsuario: NuevoUsuario): void {

    this.nombreIngresado = this.createForm.get("nombreUsuario")?.value;
    this.email = this.createForm.get("email")?.value;
    this.passIngresada = this.createForm.get("password")?.value;

    const crearU = {
      nombre_usuario:this.nombreIngresado,
      email:this.email,
      contrasenia:this.passIngresada
    }

    console.log(crearU);

    this.usuariosService.crearUsuario(crearU).subscribe( data =>{
      console.log(data);

      Swal.fire('Se registro el usuario exitosamente');

      this.router.navigate(['/home']);
    })
  }

}
