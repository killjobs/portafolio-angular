import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { InfoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {
  info: InfoPagina;
  equipo: InfoEquipo[];
  cargada = false;

  constructor(private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    console.log('Prueba de servicio');
    //leer archivo json.
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp:InfoPagina)=>{
      this.info = resp;
      this.cargada = true;
    });
  }

  private cargarEquipo(){
    this.http.get('https://ejemplo-portafolio.firebaseio.com/equipo.json')
    .subscribe((resp:InfoEquipo[])=>{
      this.equipo = resp;
    })
  }

}
