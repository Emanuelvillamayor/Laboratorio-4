

// usuario con datos publicos

export class UsuarioModel {
  nombre: string;
  email: string;
  pass:string;
  type: string;
  img: string;

  getJson() {
   const cliente = {cliente: {user: this.email, pass: this.pass}};
   return cliente;
  }

}
