export interface Libros {
    id?: number;
    nombre?: string;
    autor?: string;
    categoria?: string;
    cantidad?: number;
    cantidadDisponible?: number;
    cantidadReservada?: number;
    tarifa?: number;
}

export interface Usuarios {
    id?: number;
    usuario?: string;
    contrasena?: string;
    rol?: string;
}
export interface Reserva {
    id?: number;
    fechaDevolucion?: Date;
    cantidadReservado?: number;
    totalReserva?: number;
    usuario?: Usuarios;
    libro?: Libros;
}