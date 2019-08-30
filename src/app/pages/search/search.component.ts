import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProductoService } from 'src/app/services/info-producto.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              public _productoService:InfoProductoService) { }

  ngOnInit() {

    this.route.params
    .subscribe(parametros=>{
      this._productoService.getProductoDetalle(parametros['termino']);
    });

  }

}
