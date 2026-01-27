console.log("hola");
// TODO: investigar q es un objeto 
// su estructura o ejemplo 
// q es una interfaz , para que sirve la interface 
// que es destructuring de objetos 
// para un objeto uso const o let?
// como pongo una propiedad de manera opcional 
// ¿Qué es un objeto?
// Es una estructura que agrupa datos relacionados usando clave : valor
// Se usa para representar cosas reales como personas, productos, etc.
const useR = {
  nombre: "María José",
  lastName: "Sandoval Guillén",
  age: 19,
  address: {
    city: "aguascalientes",
    cp: 20342,
  },
  isAdmin: true,
  permissions: ["1", "2"],
};
console.log(useR);

// ¿Qué es una interface?
// Sirve para definir la forma que debe tener un objeto
// Ayuda a evitar errores y controlar los tipos de datos
interface User {
msg?: string,
  name: string;
  lastName: string;
  age: number;
  address: {
    city: "aguascalientes",
    cp: 20342,
  }
   isAdmin: boolean;
  permissions: string[],
  printMessage: (a: number) => void;
  telefono?: string; // Propiedad opcional (puede existir o no)
}
const user: User = {
  name: "María José",
  lastName: "Sandoval Guillén",
  age: 19,
  address: {
    city: "aguascalientes",
    cp: 20342,
  },
  isAdmin: true,
  permissions: ["1", "2"],
  printMessage: function (): {} {
    console.log("hola mundo");
  }
};


const userdos: User = {
  name: "María José",
  lastName: "Sandoval Guillén",
  age: 19,
  address: {
    city: "aguascalientes",
    cp: 20342,
  },
  isAdmin: true,
  permissions: ["1", "2"],
    printMessage: {
};
 console.log(user) ;

const message = userdos.msg; 









// Uso de la interface
// El objeto debe cumplir con la estructura de la interface
const estudiante: Persona = {
  nombre: "Luis",
  edad: 22
};

// Destructuring de objetos
// Permite extraer propiedades de un objeto de forma rápida
const { nombre, edad } = persona;

// ¿const o let?
// const: se usa casi siempre para objetos
// let: solo si el objeto se va a reasignar
