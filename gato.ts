import {Animal} from "/.absAnimal";
import {Mascota} from "/. interfaceMascotas";

// creo la clase Gato que hereda de la clase Animal  en implemanta la interface Mascota

export class Gato extend Animal implements Mascota{
    private Nombre : string;

constuctor = (paramPatas:number,paramNombre:string){
    super(paramPatas);
    this.nombre=paramNombre
}

public comer():void{
    console.log(`El gato ${this.nombre} esta comiendo`);
}

public caminar (paras:number): void{
    console.log(`El gato${this.nombre}tiene ${this.Nombre}
    tiene ${this.getPatas()} y esta caminando`);

}

public jugar (nombre:string){
    console.log(`El gato ${this.nombre}esta jugando`);

}

public getNombre() : string;{
    return this.Nombre;

}
public setNombre(nombre:string):void{
    this. nombre=nombre;
}


}