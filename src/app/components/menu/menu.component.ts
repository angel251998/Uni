import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public authservice: AuthService, public router: Router) { }

  ngOnInit() {}

  OnLogout() {
    this.authservice.logout();
  }

  OnHome() {
      this.router.navigate(['/home']);
  }

  OnCuenta() {
    this.router.navigate(['/cuenta']);
}
}
