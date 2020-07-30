import { Component} from '@angular/core';
import {  Pelicula } from 'src/app/models/pelicula.models';
import { DetallesPeliculasService } from '../detalles-peliculas/detalles-peliculas.service';
import { ActivatedRoute } from '@angular/router';
import { Peliculas } from 'src/app/models/peliculas.models';

@Component({
  selector: 'app-detalles-peliculas',
  templateUrl: './detalles-peliculas.page.html',
  styleUrls: ['./detalles-peliculas.page.scss'],
})
export class DetallesPeliculasPage {
  peliculas: Peliculas[] = [];
  val: String;

  constructor(private detallesPeliculasService: DetallesPeliculasService, private activeRoute: ActivatedRoute) {
    this.detallesPeliculasService.mostrarDetallesPeliculas(this.val)
    .subscribe(respuesta => this.peliculas = respuesta);
  }
 
}
