import { Component, OnInit } from '@angular/core';
import { ServiService } from '../servicios/servi.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  public servic: any = [];

  constructor( public serviservice: ServiService) {}

  ngOnInit() {
    this.serviservice.getComidas().subscribe( chats => {
      this.servic = chats;
    });
  }
}
