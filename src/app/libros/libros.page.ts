import { Component, OnInit } from '@angular/core';
import { Libros } from '../interfaces/interfaces';
import { ServicioService } from '../services/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
})
export class LibrosPage implements OnInit {

  libros: Libros[] = [];
  usuario: string;
  constructor(private servicio: ServicioService, private router: Router) { }

  ngOnInit() {
    this.comprobarRol();
  }
  obtenerLibros() {
    this.servicio.obtenerLibros().subscribe(res => {
      this.libros = res as Libros[];
    });
  }
  eliminarLibro(id: number) {
    this.servicio.eliminarLibro(id).subscribe(res => {

      console.log(res);
      this.libros = this.libros.filter(iter => iter.id !== id);
      alert('Se eliminó libro');
    });
  }
  comprobarRol() {
    if (sessionStorage.getItem('USUARIO') === 'ADMINISTRADOR') {
      this.usuario = 'ADMINISTRADOR';
      this.obtenerLibros();
    } else {
      if (sessionStorage.getItem('USUARIO') === 'CLIENTE') {
        this.usuario = 'CLIENTE';
        this.obtenerLibros();
      }else{

        alert('Por favor ingrese su usuario y contraseña');
        this.router.navigate(['/login']);
      }
    }

  }
}
