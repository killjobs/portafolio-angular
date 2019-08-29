import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public anio:number;

  constructor( public _infoService: InfoPaginaService) { 
    this.anio = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
