import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { DetallesPeliculasPageRoutingModule } from './detalles-peliculas-routing.module';

import { DetallesPeliculasPage } from './detalles-peliculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    DetallesPeliculasPageRoutingModule
  ],
  declarations: [DetallesPeliculasPage]
})
export class DetallesPeliculasPageModule {}
