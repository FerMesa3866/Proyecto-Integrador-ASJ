import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginUsuario} from "../components/models/login-usuario";
import {NuevoUsuario} from "../components/models/nuevo-usuario";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public loginUrl = "http://localhost:8080/usuario";

  private authenticated = false;

  private getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
  }



  constructor(private http: HttpClient) {}

  loginUsuarios( loginUsuario: LoginUsuario ): Observable<any>{
    return this.http.post<LoginUsuario>(`${this.loginUrl}/login`, loginUsuario);
  }

  crearUsuario( nuevoUsuario: NuevoUsuario ){
    return this.http.post<NuevoUsuario>(`${this.loginUrl}/crear`, nuevoUsuario);
  }

  obtenerUsuario(nombreUsuario: string): Observable<any>{
    return this.http.get<NuevoUsuario>(this.loginUrl+`/${nombreUsuario}`);
  }

  actualizarUsuario( nuevoUsuario: NuevoUsuario, id: number ){
    return this.http.put<NuevoUsuario>(this.loginUrl+`/${id}`, nuevoUsuario);
  }

  eliminarUsuario(id: number ){
    return this.http.delete(this.loginUrl+`/${id}`);
  }

  iniciado() {
    this.authenticated = true;
  }

  cerrar() {
    this.authenticated = false;
  }

  autenticado(): boolean {
    return this.authenticated;
  }


}
