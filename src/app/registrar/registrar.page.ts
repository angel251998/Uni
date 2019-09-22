import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  public email: string;
  public password: string;

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmitRegister() {
    this.auth.register(this.email, this.password).then( auth => {
      this.router.navigate(['home']);
      console.log(auth);
    }).catch(err => console.log(err));
  }

}
