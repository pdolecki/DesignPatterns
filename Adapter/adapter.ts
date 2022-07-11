// Wyobraźmy sobie że chcemy poruszać się samochodem po szynach
class Car {
  constructor(private type: string) {}

  public getType() {
    return this.type;
  }
}
// Tworzymy klasę tory(Rails)
class Rails {
  constructor(private type: string) {}

  public getType() {
    return this.type;
  }
}
// Następpnie tworzymy adapter, który
// zamieni nam typ napędu na szynowy
class CarAdapter extends Rails {
  constructor(private car: Car) {
    super(car.getType());
  }

  public getType() {
    return this.car.getType();
  }
}
// Teraz tworzymy nasz samochód do jazdy po torach
const car = new CarAdapter(new Car("Wheels"));
