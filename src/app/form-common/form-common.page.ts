import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libros } from '../interfaces/interfaces';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-form-common',
  templateUrl: './form-common.page.html',
  styleUrls: ['./form-common.page.scss'],
})
export class FormCommonPage implements OnInit {

  idLibro: string;
  accion: string;
  libro: Libros = {};
  constructor(private activateRouter: ActivatedRoute, private servicio: ServicioService, private router: Router) { }

  ngOnInit() {
    this.idLibro = this.activateRouter.snapshot.paramMap.get('id');
    if (this.idLibro == null) {
      this.accion = 'Registro libro';
      this.libro.cantidadReservada = 0;
    } else {
      this.accion = 'Editar libro';
      this.obtenerLibro();
    }
  }
  guardarLibro() {
    if(this.idLibro == null){
      this.libro.cantidadDisponible = this.libro.cantidad;
      this.servicio.guardarLibro(this.libro).subscribe(res => {
        alert('Se insertó nuevo libro');
        this.router.navigate(['/libros']);
      });
    }else{
      this.servicio.editarLibro( parseInt(this.idLibro), this.libro).subscribe(res => {
        alert('Se editó libro');
        this.router.navigate(['/libros']);
      }, err =>{
        alert(err.error);
      });
    }
    
  }
  obtenerLibro() {
    this.servicio.obtenerLibro( parseInt(this.idLibro) ).subscribe(res => {
      this.libro = res as Libros;
    });
  }

 
}
