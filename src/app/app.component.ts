import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { InfoProductoService } from './services/info-producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _infoService: InfoPaginaService,
              public _productoService: InfoProductoService){

  }
}
