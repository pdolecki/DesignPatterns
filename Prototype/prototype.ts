// Wyboraźmy sobie, że chcemy stworzyć sobie swojego robota w oparciu
// o istniejący(ogólny) prototyp:
const robot = {
  // ogólny prototyp
  numberOfLimbs: 4,
  start() {},
  stop() {},
};
// Wykorzystujemy JS'ową metodę, dodatkowo definiujemy właściciela
// naszego robota:
// Object.create(proto[, propertiesObject])
const myRobot = Object.create(robot, { owner: { value: "Patrick" } });
// Sprawdzamy, czy prototyp naszego robota jest ogólnym prototypem
console.log(myRobot.__proto__ === robot); // true
