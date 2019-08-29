import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProducto } from '../interfaces/info-producto.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoProductoService {
  public producto:InfoProducto[];
  public cargaCompleta:boolean;

  constructor(public http: HttpClient) {
    this.cargarProducto();
   }

  private cargarProducto(){
    this.http.get("https://ejemplo-portafolio.firebaseio.com/producto_idx.json")
    .subscribe((resp:InfoProducto[])=>{
        this.producto = resp;
        setTimeout(()=>{
          this.cargaCompleta = true;
        },1000);
    });
    
  }
}
