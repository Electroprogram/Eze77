import { Animal } from "./absAnimal";

//Creo la clase Perro que hereda de la clase Animal...

export class Perro extends Animal{
    
    constructor(paramPatas:number){
        
        super(paramPatas)
    }

    public comer():void {
        console.log(`La Perro esta Comiendo`);
        
    }
    
    public caminar(patas:number):void{
        console.log(`El Perro tiene ${this.getPatas()} patas y esta caminando`);
        
    }
}

