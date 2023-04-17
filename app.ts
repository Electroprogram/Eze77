import {Perro} from "/.perro";
import {Gato} from "/.gato";
import {ListaDeAnimales} from "/. ListaDeAnimales";
import {Oso} from "/.Oso";


//creo la instancias 

const MiGato = new Gato (3, "Suertudo");
const MiOso = new (0,"Pepe");
const Miperro = new (1, "Pepo");
const MiListaDeAnimales : MiListaDeAnimales =
new ListaDeAnimales ([]);

//Agrergo al array

MilistaAnimales.agregarAnimal(MiGato);
MilistaAnimales.agregarAnimal(MiPerro);
MilistaAnimales.agregarAnimal(MiOSo);

console.log (MiListaDeAnimales);
console.log (MiListaDeAnimales);

console.log (MiListaDeAnimales.buscar(MiOSo))
console.log (MiListaDeAnimales.buscar(MiGato))

MiPerro.caminar(1);
MiGato.comer(3);
MiPerro.jugar(Pepo);
MiOso.caminar (0);