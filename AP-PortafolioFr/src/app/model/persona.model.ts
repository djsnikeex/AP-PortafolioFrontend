export class persona {
  id?: number;
  nombre: string;
  apellido: string;
  descripcion: string;
  img: string;
  email: string;
  celular: number;
  titulo: string;
  edad: number;
  banner: string;
  ciudad: string;
 
  
  

    constructor(nombre: string, apellido: string, descripcion: string, img: string, email: string, celular: number, titulo: string, edad: number, banner: string, ciudad: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion = descripcion;
        this.email = email;
        this.celular = celular;
        this.titulo = titulo;
        this.edad = edad;
        this.banner = banner;
        this.ciudad = ciudad;


    }
    
}