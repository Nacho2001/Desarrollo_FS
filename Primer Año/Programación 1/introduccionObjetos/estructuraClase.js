class NombreClase{
    constructor(n, ){
        this.nombre=n;
        this._nombreM=n // Si tiene _ es una propiedad privada
    //  Propiedad = parametro
    }

    get nombre(){ // Estructura de un getter
        return this.nombre
    }

    datos(){ // Metodo datos: devuelve el nombre, apellido
        return this.nombre+","+this.apellido
    }
}