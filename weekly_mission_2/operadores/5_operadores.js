// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());

console.log(
  "Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas"
);
console.log(namesToUpperCase);

const nombres = ["Luis", "Alberto", "Maria", "Regina"];

// const nombres_mayusculas = nombres.map((nombre) => nombre.toUpperCase());
const nombres_mayusculas = nombres.map(function (nombre) {
  return nombre.toUpperCase();
});

console.log(nombres_mayusculas);
