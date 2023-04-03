import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsuariosService} from "../../services/usuarios.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NuevoUsuario} from "../models/nuevo-usuario";
import Swal from 'sweetalert2';
import { Router } from "@angular/router";

// import {NuevoUsuario} from "../models/nuevo-usuario";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  datosUsuario: NuevoUsuario = {
    id: 0,
    nombre_usuario: '',
    email: '',
    contrasenia: ''
  }

  usuarios: any;

  bandera: boolean = false;

  eliminar: boolean = false;
  idUsuario = Number(localStorage.getItem('id'));

  formularioActualizar: FormGroup;

  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    this.formularioActualizar = formBuilder.group({
      nombreUsuario: '',
      email: '',
      password: ''
    })
  }

  ngOnInit(): void {
    const usuario = localStorage.getItem("usuario");
    this.usuariosService.obtenerUsuario(usuario as string).subscribe( datos => {
      this.datosUsuario = datos;
      console.log(datos);
    })
  }

  actualizarUsuario(formularioActualizar: any){
    let actualizar: NuevoUsuario = {
      id: this.datosUsuario.id,
      nombre_usuario: formularioActualizar.nombreUsuario,
      contrasenia: formularioActualizar.password,
      email: formularioActualizar.email
    }
    this.usuariosService.actualizarUsuario(actualizar, this.datosUsuario.id as number).subscribe(datos => {
      console.log(datos);
      this.datosUsuario = datos;
      localStorage.removeItem("usuario");
      localStorage.setItem("usuario", datos.nombre_usuario);
    });
  }

  eliminarCuenta(){
    this.eliminar = true;
  }

  eliminarCancelado(){
    this.eliminar = false;
  }

  eliminarUsuario(){
    this.usuariosService.eliminarUsuario(this.idUsuario).subscribe(data =>{
      // this.sesion.logueo.next(false);
      localStorage.removeItem('id');
      // Swal.fire({
      //   title: 'Cuenta eliminada',
      //   text: 'Podes volver a crear otra cuando quieras',
      //   confirmButtonText: 'Cerrar'
      // })
      this.router.navigate(['/login']);
      // console.log(id)
    })
  }





}
