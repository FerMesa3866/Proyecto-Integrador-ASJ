import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Importas Rutas
import { ROUTES } from './app.routes';

//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { TarjetasgeneralComponent } from './components/tarjetasgeneral/tarjetasgeneral.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { RockComponent } from './components/categorias/rock/rock.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ListasComponent } from './components/listas/listas.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CancionesComponent } from './components/canciones/canciones.component';
import {FooterComponent} from "./components/shared/footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        ArtistaComponent,
        NavbarComponent,
        NoimagePipe,
        TarjetasComponent,
        TarjetasgeneralComponent,
        LoadingComponent,
        RockComponent,
        LoginComponent,
        PerfilComponent,
        FavoritosComponent,
        ListasComponent,
        RegisterComponent,
        CancionesComponent,
        FooterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
