import { Component } from '@angular/core';
import { UsuariosService } from "../../../services/usuarios.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private validacion: UsuariosService) {
  }

  cerrar(){
    this.validacion.cerrar();
  }

}
