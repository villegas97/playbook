const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];
console.log("-----------Ejercicio 2.1----------");
explorers.forEach((nombre) => console.log(nombre.name));
console.log("-----------Ejercicio 2.2----------");
explorers.forEach((explorer) => console.log(explorer.stack));
console.log("-----------Ejercicio 2.3----------");
const stacks = explorers.map((stack) => stack.stack);
console.log(stacks);
console.log("-----------Ejercicio 2.4----------");
const js = explorers.filter((explorers) => explorers.stack.includes("js"));
console.log(js);
console.log("-----------Ejercicio 2.5----------");
const cdmx = explorers.find((explorers) => explorers.city == "CDMX");
console.log(cdmx);
console.log("-----------Ejercicio 2.6----------");
const exercises_sum = explorers.reduce(
  (acc, explorers) => (acc += explorers.exercises_completed),
  0
);
console.log(exercises_sum);
console.log("-----------Ejercicio 2.7----------");
const exFinish = explorers.some(
  (res) => res.missions.frontend.exercisesFinished === true
);
console.log(exFinish);
console.log("-----------Ejercicio 2.8----------");
const isFinish = explorers.every(
  (res) => res.missions.onboarding.isFinished === true
);
console.log(isFinish);
