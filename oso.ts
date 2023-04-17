import {Animal} from " /. absAnimal";
import {Mascota} from "/.interfaceMascota";

// creo la clase oso de la clase Animal e implementa Mascota

export class Oso extends Animal implements Mascota {
    private nombre : string;

    constructor=(paramPatas : string , paraNombre:string) {
        Super(paramPatas) 
            this.Nombre = this.paramNombre;
        }

        public comer():void{
            console.log (`El oso ${this.nombre} esta comiendo`);
        }

        public caminar (patas:number) : void {
            console.log(`El oso ${this.nombre} tiene ${this. getPatas ()}
                 patas y no camina}`);
        }

        public jugar (nombre:string ){
            console.log (`El oso ${this.nombre} esta jugando en el agua `);
        }
        public getNombre():string{
            return this.nombre;
        }

        public setNombre (nombre:string): void{
            Console.log(`El oso se llama ${this.nombre}`);
        }

        
    
    }
