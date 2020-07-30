import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { PeliculasService } from '../peliculas.service';
import {  Peliculas, Search } from 'src/app/models/peliculas.models';




@Injectable({
  providedIn: 'root'
})
export class DetallesPeliculasService {
  peliculas: Peliculas[] = [];
  val: String;
  constructor(private http: HttpClient, private peliculasService: PeliculasService) { }


  //Llamada a la Api para obtener la informacion de una pelicula en concreto mediante su titulo
  mostrarDetallesPeliculas(data){
  if(data === undefined) data = this.val;
   console.log("dentro mostrarPeliculas service: " + data);
    return this.http.get<Peliculas[]>('http://www.omdbapi.com/?t='+data+'&apikey=40796aca');
  }

  //Metodo invocado desde home.page para enviar el titulo de la pelicula deseada.
 enviarDatos(data){
  this.val = data;

 }

}