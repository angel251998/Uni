import { Component, OnInit } from '@angular/core';
import { ElectroService, electro } from '../servicios/electro.service';

@Component({
  selector: 'app-electronica',
  templateUrl: './electronica.page.html',
  styleUrls: ['./electronica.page.scss'],
})
export class ElectronicaPage implements OnInit {

  public electronic: any = [];

  constructor( public electroservice: ElectroService) {}

  ngOnInit() {
    this.electroservice.getComidas().subscribe( chats => {
      this.electronic = chats;
    });
  }
}
