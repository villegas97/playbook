class Mascota {
  constructor(nombre, edad) {
    this.nombre = nombre;
    // this.raza = raza;
    this.edad = edad;
  }
  get getNombre() {
    return this.nombre;
  }
  get getRaza() {
    return this.raza;
  }
  get getEdad() {
    return this.edad;
  }
  set setNombre(nombre) {
    this.nombre = nombre;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
  set setEdad(edad) {
    this.edad = edad;
  }
  getInfo() {
    return `Nombre: ${this.nombre}, edad: ${this.edad}`;
  }
}
class Perro extends Mascota {
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.raza = raza;
  }
  get getRaza() {
    return this.raza;
  }
  set setRaza(raza) {
    this.raza = raza;
  }
  infoCompleta() {
    let nombreEdad = super.getInfo();
    return `${nombreEdad}, raza: ${this.raza}`;
  }
}
const mascota1 = new Perro("Pantera", 7, "Pitbull");
console.log(mascota1);
console.log(mascota1.getInfo());
console.log(mascota1.infoCompleta());

// const mascota1 = new Mascota("Pantera", 5);
// console.log(mascota1.getNombre);
// mascota1.setNombre = "Duque";
// console.log(mascota1.getNombre);

// class Perro extends Mascota {}
// const mascota2 = new Perro("Nina", 3);
// console.log(mascota2.getNombre);
// mascota2.setNombre = "Mickey";
// console.log(mascota2.getNombre);
