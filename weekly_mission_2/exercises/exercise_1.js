const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

const user = {
  user: "Luis",
  username: "LuisVill",
  bio: "Mexican Developer",
  age: "24",
  getInfo: function () {
    return `User: ${this.user}, username: ${this.username}`;
  },
};
console.log("Usuario: " + user.user);
console.log("Edad: " + user.age);
console.log(user.getInfo());
