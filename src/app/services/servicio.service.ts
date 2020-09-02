import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libros, Usuarios, Reserva } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private urlEndPoint: string = 'http://localhost:9080';

  constructor(private http: HttpClient) { }

  guardarLibro(libro: Libros): Observable<Libros> {
    return this.http.post<Libros>(this.urlEndPoint + '/libro', libro);
  }
  editarLibro(id: number, libro:Libros): Observable<Libros>{
    return this.http.put<Libros>(this.urlEndPoint + '/libro/' + id, libro);
  }
  obtenerLibros(): Observable<Libros[]> {
    return this.http.get<Libros[]>(this.urlEndPoint + '/libro');
  }
  obtenerLibro(id: number): Observable<Libros> {
    return this.http.get<Libros>(this.urlEndPoint + '/libro/' + id);
  }
  eliminarLibro(id: number):Observable<any>{  
    return this.http.delete<any>(this.urlEndPoint + '/libro/' + id);
  }
  buscarUsario(usuario: Usuarios):Observable<Usuarios>{
    return this.http.get<Usuarios>(this.urlEndPoint + '/usuario/' + usuario.usuario + '/' + usuario.contrasena);
  }
  registrarUsuario(usuario:Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>(this.urlEndPoint + '/usuario', usuario);
  }
  confirmarReserva(reserva: Reserva): Observable<Reserva>{
    return this.http.post<Reserva>(this.urlEndPoint + '/reserva', reserva);
  }
}
