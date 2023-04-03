import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SearchComponent} from "./components/search/search.component";
import {ArtistaComponent} from "./components/artista/artista.component";
import {RockComponent} from "./components/categorias/rock/rock.component";
import {LoginComponent} from "./components/login/login.component";
import {PerfilComponent} from "./components/perfil/perfil.component";
import {FavoritosComponent} from "./components/favoritos/favoritos.component";
import {ListasComponent} from "./components/listas/listas.component";
import {RegisterComponent} from "./components/register/register.component";

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'favoritos', component: FavoritosComponent },
  { path: 'listas', component: ListasComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistaComponent },
  { path: 'rock/:name', component: RockComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

