// Wyobraźmy sobie, że chcemy stworzyć swojego robota w
// oparciu o istniejący(ogólny) prototyp:
const robot = {
  // OGÓŁNY PROTOTYP
  numberOfLimbs: 4,
  owner: "RobotFactory",

  clone: (newOwner) => Object.create(robot, { owner: { value: newOwner } }),
};
// Wykorzystujemy metodę do klonowania,
// dodatkowo podając nowego właściciela
const bobsRobot = robot.clone("Bob");
const dinsRobot = robot.clone("Din");
// Sprwdzamy właścicieli oraz prototypy robotów
console.log(
  `Owner: ${bobsRobot.owner} Is 'robot' proto: ${bobsRobot.__proto__ === robot}`
);
console.log(
  `Owner: ${bobsRobot.owner}, Is 'robot' proto: ${
    bobsRobot.__proto__ === robot
  }`
);
