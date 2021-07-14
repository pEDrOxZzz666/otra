import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = "Pedro";
  apellido = "Ruiz";
  edad = 17;
  //empresa = "Píldoras Informaticas";

  /*getEdad() {
    return this.edad;
  }*/

  //propertyBindings
  habilitacionCuadro = false;

  registrado = false;

  textoRegistro = "No hay nadie registrado";

  getRegistroUusuario() {
    this.registrado = false;
  }

  setusuarioRegistrado(event:Event) {     
      if((<HTMLInputElement>event.target).value == "si") {
        this.textoRegistro = "Usuario registrado";  
      } 
      else {
        this.textoRegistro = "No hay nadie registrado"; 
      }

  }

  prueba = " ";

  eventoPrueba(event:Event) {    
    if((<HTMLInputElement>event.target).checked) {
      this.prueba = (<HTMLInputElement>event.target).value;      
    } else {
      this.prueba = "";
    }
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }


  //FIN PROPERTYBINDINGS

  constructor() { }

  ngOnInit(): void {
  }

}
