// creo la Clase Abstracta Animal 

export abstract class Animal {
    private patas:number;

    constructor (paramPatas:number){
        this.patas-paramPatas;

    }

    getPatas(): number {
        return this.patas;
    
    }

    setPatas(patas:number):void{
        console.log (`El animal tiene ${this.patas} patas`)

    }
    
    abstract comer():void;
    abstract caminar (patas:number):void;
    
}

