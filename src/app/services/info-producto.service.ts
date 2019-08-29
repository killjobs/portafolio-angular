import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProducto } from '../interfaces/info-producto.interface';
import { InfoProductoDescripcion } from '../interfaces/info-producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoProductoService {
  public producto:InfoProducto[];
  public cargaCompleta:boolean;
  public productoFiltrado:InfoProducto[];
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

  public getProducto(id:string){
    return this.http.get(`https://ejemplo-portafolio.firebaseio.com/producto/${ id }.json`)
  }

  public getProductoDetalle(termino:string){
    this.productoFiltrado = this.producto.filter(producto=>{
      return true;
    });

    console.log(this.productoFiltrado);
  }
}
