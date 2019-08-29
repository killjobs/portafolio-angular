import { Component, OnInit } from '@angular/core';
import { InfoProductoService } from 'src/app/services/info-producto.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public _productoService : InfoProductoService) { }

  ngOnInit() {
  }

}
