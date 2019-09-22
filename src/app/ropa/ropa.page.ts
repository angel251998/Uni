import { Component, OnInit } from '@angular/core';
import { RopaService, ropas } from '../servicios/ropa.service';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.page.html',
  styleUrls: ['./ropa.page.scss'],
})
export class RopaPage implements OnInit {

  public ropas: any = [];

  constructor( public ropaservice: RopaService) {}

  ngOnInit() {
    this.ropaservice.getRopas().subscribe( chats => {
      this.ropas = chats;
    });
  }
}

