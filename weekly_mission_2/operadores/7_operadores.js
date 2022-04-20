// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const countriesContainingLand = countries7.filter(
  (
    country // esta es una función
  ) => country.includes("land") // indicación para solo filtrar elementos que incluyan "land"
);
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos");
console.log(countriesContainingLand);
const countriesEndsByia = countries7.filter((country) => country.endsWith("y"));
console.log("Ejemplo 7: Paises que terminan en y, function arrow");
console.log(countriesEndsByia);

const countriesEndsByia2 = countries7.filter(function (country) {
  return country.endsWith("y");
});
console.log("Ejemplo 7: Paises que terminan en y");
console.log(countriesEndsByia2);
