import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Peliculas } from '../models/peliculas.models';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  peliculas: Peliculas[] = [];
  constructor(private http: HttpClient) { }


  //Llamada a la api para obtener los resultados de una busqueda de varias peliculas
  getPeliculas(data){
    console.log("desde getPeliculas service: " + data)
    this.peliculas = data;
    return this.http.get<Peliculas[]>('http://www.omdbapi.com/?s='+data+'&apikey=40796aca');
  }
}
