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
  name: string;
  lastName: string;
  age: number;
  address: {
    city: string;
    cp: number;
  };
  isAdmin: boolean;
  permissions: string[];
  msg?: string;
  printMessage?: () => void;
}

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
  printMessage: () => {
    console.log("Hola, soy María José");
  }
};

console.log(userdos);

const message = userdos.msg;
console.log(message ?? "Sin mensaje");


// ¿Qué es un objeto?
// Es una estructura que agrupa datos relacionados usando clave : valor
// Se usa para representar cosas reales como personas, productos, etc.

const persona = {
  nombre: "María",
  edad: 19,
  ciudad: "Aguascalientes"
};

// ¿Para un objeto uso const o let?
// Normalmente se usa const
// Con const puedes modificar sus propiedades
// Pero NO puedes reasignar el objeto completo

persona.nombre = "José"; 
// persona = {};         

// Usa let solo si vas a reasignar el objeto
let producto = {};
producto = { nombre: "Laptop", precio: 15000 };

// ¿Qué es destructuring de objetos?
// Es una forma de extraer propiedades de un objeto y guardarlas en variables

const { nombre, edad } = persona;
console.log(nombre); // José
console.log(edad);   // 19

// También puedes cambiar el nombre de la variable al extraerla
const { ciudad: city } = persona;
console.log(city); // Aguascalientes

// ¿Cómo poner una propiedad opcional? (TypeScript)
// Se usa el signo ?

interface User {
  name: string;
  age: number;
  email?: string; // propiedad opcional
}

//const user1: User = {
//  name: "María",
 // age: 19
//};

//const user2: User = {
  //name: "Ana",
  //age: 20,
  //email: "ana@mail.com"
//};
