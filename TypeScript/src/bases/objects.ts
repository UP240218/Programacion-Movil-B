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
