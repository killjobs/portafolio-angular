import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProductoService } from 'src/app/services/info-producto.service';
import { InfoProductoDescripcion } from 'src/app/interfaces/info-producto-descripcion.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productoDetalle: InfoProductoDescripcion;
  idProducto:string;

  constructor(private route: ActivatedRoute,
              public _productoService: InfoProductoService) { }

  ngOnInit() {
    this.route.params
    .subscribe(parametros => {
      this.idProducto = parametros['id'];
      this._productoService.getProducto(parametros['id'])
      .subscribe((producto:InfoProductoDescripcion)=>{
        this.productoDetalle = producto;
      });
    });

  }

}
