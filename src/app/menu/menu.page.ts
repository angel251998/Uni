import { Component, OnInit } from '@angular/core';
import { MenuService, menus } from '../servicios/menu.service';
// import { Script } from 'vm';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public comidas: any = [];

  constructor( public menuservice: MenuService) {}

  ngOnInit() {
    this.menuservice.getComidas().subscribe( chats => {
      this.comidas = chats;
    });
  }
  }
