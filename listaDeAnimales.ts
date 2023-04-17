import{Animal} from "/.absAnimal";

//creo la clase lista de animales y aplico composicion  con la clase animales 

export class ListaDeAnimales{
    private animales :animal[];

    constructor=(paraAnimales:animal[]){
        this.animales=[];
    }
 public agregarAnimal(animal:Animal):void{
    this.animales.push(animal);
 }

 removerAnimal(Animal:Animal):void{
const indice = this.animales.indexof (Animal);
if ( indice any!== -1){
    this.animales.splice(Indice,1);
}
 }


}

function removerAnimal(Animal: any, Animal1: any) {
    throw new Error("Function not implemented.");
}
