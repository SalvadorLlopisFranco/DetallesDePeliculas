import { Component } from '@angular/core';
import {PeliculasService } from './peliculas.service'
import { DetallesPeliculasService } from './detalles-peliculas/detalles-peliculas.service';
import { Peliculas } from '../models/peliculas.models';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
 
  peliculas: Peliculas[] = [];
  val: String;


  constructor(private peliculasService: PeliculasService, private detallesPeliculasService: DetallesPeliculasService) {
    this.peliculasService.getPeliculas("")
    .subscribe(respuesta =>  this.peliculas = respuesta);
    console.log(this.peliculas);
  }


  //Escucha al evento de la searchbar para que cada vez que se escriba alguna cadena de caracteres haga una busqueda a la api con esa información.
  onSearchTerm(ev: CustomEvent) {
    this.val = ev.detail.value;
    console.log("Evento de la serachbar: " + this.val);
    if (this.val && this.val.trim() !== '') {
        this.peliculasService.getPeliculas(this.val)
        .subscribe(respuesta => this.peliculas = respuesta);
        console.log(this.peliculas);
    }
  }


  //Envia el nombre de la pelicula seleccionada a detalles-pelicula.service para mostrar los detalles de la pelicula correcta
  algoHace(data){
    this.val = data;
      if (this.val && this.val.trim() !== '') {    
      this.detallesPeliculasService.enviarDatos(data); 
  }
  }
}
