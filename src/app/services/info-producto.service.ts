import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProducto } from '../interfaces/info-producto.interface';
import { InfoProductoDescripcion } from '../interfaces/info-producto-descripcion.interface';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class InfoProductoService {

  public producto:InfoProducto[] = [];
  public cargaCompleta:boolean;
  public productoFiltrado:InfoProducto[] = [];

  constructor(public http: HttpClient) {

    this.cargarProducto();

   }

  private cargarProducto(){

    return new Promise((resolve, reject) => {
      this.http.get("https://ejemplo-portafolio.firebaseio.com/producto_idx.json")
      .subscribe((resp:InfoProducto[])=>{
        this.producto = resp;
        setTimeout(()=>{
          this.cargaCompleta = true;
        },1000);
        resolve();
      });
    });
  }

  public getProducto(id:string){
    return this.http.get(`https://ejemplo-portafolio.firebaseio.com/producto/${ id }.json`)
  }

  public getProductoDetalle(termino:string){

    if ( this.producto.length === 0){
      this.cargarProducto().then( () => {
        //ejecuta despues de tener los productos
        this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos(termino);
    }
  }

  public filtrarProductos(termino:string){
    
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.producto.forEach(prod=>{

      let tituloLower = prod.titulo.toLocaleLowerCase();

      if(prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0){
        this.productoFiltrado.push(prod);
      }

    });

  }

}
