export interface usuario{
    id:number,
    username:string,
    email:string,
    imagen:string,
    rol:string
}

export interface propsUsuario{
    usuario:usuario
}

export interface publicacion{
    id:number,
    titulo:string,
    cuerpo:string,
    imagen:string,
    usuario:string,
    fecha:string
}

export interface propsPublicacion{
    publicacion:publicacion
}

export interface imagenPublicacion{
    imagen:string
}