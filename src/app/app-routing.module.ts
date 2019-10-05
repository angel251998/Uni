import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule', canActivate : [NologinGuard] },
  { path: 'registrar', loadChildren: './registrar/registrar.module#RegistrarPageModule' },
  { path: 'recuperar', loadChildren: './recuperar/recuperar.module#RecuperarPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate : [AuthGuard] },
  { path: 'ropa', loadChildren: './ropa/ropa.module#RopaPageModule' },
  { path: 'electronica', loadChildren: './electronica/electronica.module#ElectronicaPageModule' },
  { path: 'servicios', loadChildren: './servicios/servicios.module#ServiciosPageModule' },  { path: 'chats', loadChildren: './chats/chats.module#ChatsPageModule' },
  { path: 'cuenta', loadChildren: './cuenta/cuenta.module#CuentaPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
