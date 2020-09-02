import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from '../services/servicio.service';
import { Libros, Reserva } from '../interfaces/interfaces';
import { LibrosPage } from '../libros/libros.page';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  usuario: string;
  idLibro: string;
  libro: Libros = {};
  total: number;
  reserva: Reserva ={};
  constructor(private router: Router, private servicio: ServicioService, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.comprobarRol();
  }
  comprobarRol(){
    if (sessionStorage.getItem('USUARIO') === 'CLIENTE') {
      this.usuario = 'CLIENTE';
      console.log(sessionStorage.getItem('ID'));
      this.obtenerLibro();
    }else{
      this.router.navigate(['/login']);
      alert('Por favor ingrese sus credenciales');
    }
  }
  obtenerLibro(){
    this.idLibro = this.activatedRouter.snapshot.paramMap.get('id');
    this.servicio.obtenerLibro( parseInt( this.idLibro )).subscribe(res =>{
      this.libro = res as Libros;
      this.libro.cantidadReservada = 1;
      this.total = this.libro.cantidadReservada * this.libro.tarifa;
    });
  }
  comprobarCantidad(event){
    this.total = this.libro.cantidadReservada * this.libro.tarifa;
    if(event.detail.value > this.libro.cantidadDisponible){
      alert('Por favor elija una cantidad igual o inferior a la disponibilidad');
      this.libro.cantidadReservada = 1;
    }
  }
  confirmarReserva(){
    this.reserva.libro = this.libro;
    this.reserva.totalReserva = this.total;
    this.reserva.usuario = JSON.parse(sessionStorage.getItem('ID'));
    this.reserva.cantidadReservado = this.libro.cantidadReservada;
    this.servicio.confirmarReserva(this.reserva).subscribe(res =>{
        alert('Reserva registrada');
        this.router.navigate(['/libros']);
      });
  }
  obtenerFecha(event){
    this.reserva.fechaDevolucion = event.detail.value;
  }
}
