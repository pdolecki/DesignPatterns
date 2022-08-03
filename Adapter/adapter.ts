// Chcemy poruszać się samochodem po torach
class TrainWheels {
  rideOnTrainWheels() {
    return "TrainWheels ride on rails...";
  }
}

class CarWheels {
  rideOnCarWheels() {
    return "CarWheels ride on road...";
  }
}
// Potrzebujemy do tego adaptera(z kół przystosowanych do poruszania
// się po drodze, na takie do przemieszczania się po torach)
class CarWheelsToTrainWheelsAdapter extends TrainWheels {
  private carWheels: CarWheels;

  constructor(carWheels: CarWheels) {
    super();
    this.carWheels = carWheels;
  }

  rideOnRails() {
    return "Now car can ride on rails...";
  }
}

function rideOnRails(drive: TrainWheels) {
  console.log(drive.rideOnTrainWheels());
}
// Koła pociągowe mogą jechać po torach
const trainWheels = new TrainWheels();
rideOnRails(trainWheels);
// Koła samochodu nie mogą jechać po torach
const carWheels = new CarWheels();
// Wykorszystujemy adapter, by poruszać się samochodem po torach
const adapter = new CarWheelsToTrainWheelsAdapter(carWheels);
rideOnRails(adapter);
