import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { InfoProductoService } from 'src/app/services/info-producto.service';
import { InfoProducto } from 'src/app/interfaces/info-producto.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public _infoService: InfoPaginaService,
               public _productoService: InfoProductoService) { }

  ngOnInit() {
    
  }

}
