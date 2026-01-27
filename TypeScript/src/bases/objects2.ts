// hacer in interface y un objeto q tenga un nombre de interface animal de propiedad un name , type, age, ownerName uncion q se llame sound ()=> q haga un console log  del sonido de un perro de objeto un perro 
// Interface Animal
interface Animal {
    name: string;
    type: string;
    age: number;
    ownerName: string;
    sound: () => void;
}

const perro: Animal = {
    name: "luky",
    type: "Perro",
    age: 7,
    ownerName: "María José",
    sound: () => {
    console.log("wuau wuau");
    }
};
perro.sound();



interface Animal {
    name: string;
    type: string;
    age: number;
    ownerName: string;
    sound: () => void;
}

const gato: Animal = {
    name: "Guayaba",
    type: "Gato",
    age: 2,
    ownerName: "María José",
    sound: () => {
    console.log("miau miau ");
    }
};

gato.sound();
console.log(Animal);