import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../interfaces/interfaces';
import { ServicioService } from '../services/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuarios = {};
  constructor(private service: ServicioService, private router: Router) { }

  ngOnInit() {
    
  }

  autenticar() {
    this.service.buscarUsario(this.usuario).subscribe(res => {
      if (res != null) {
        this.usuario = res as Usuarios;
        sessionStorage.setItem('USUARIO', this.usuario.rol);
        sessionStorage.setItem('ID', JSON.stringify(this.usuario));
        this.router.navigate(['/libros']);
        this.usuario = {};
      } else {
        alert('Usuario no existe o credenciales incorrectas');
        this.usuario = {};
      }
    });
  }
  registar() {
    this.service.registrarUsuario(this.usuario).subscribe(res => {
      this.usuario = res as Usuarios;
      this.usuario.rol = 'CLIENTE';
      sessionStorage.setItem('USUARIO', this.usuario.rol);
      sessionStorage.setItem('ID', JSON.stringify(this.usuario));
      this.router.navigate(['/libros']);
      this.usuario = {};
    });
  }


}
