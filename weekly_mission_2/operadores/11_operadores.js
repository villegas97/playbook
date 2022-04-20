// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18];
const age = ages.find((age) => age < 30);
console.log("Ejemplo 11: Primera edad menor a 20 es: " + age);
const ages2 = ages.find((edad) => edad < 35);
console.log(ages2);

const edades3 = ages.find((edad) => edad < 25);

console.log("La primer edad menor a 25 es: " + edades3);
