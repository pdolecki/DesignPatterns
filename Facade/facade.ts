// Chcemy obsłużyć elektrownię jądrową, zbudowaną z wielu systemów
// Budujemy system odpowiedzialny za chłodzenie
class CoolingSystem {
  setMaxTemperature(degrees: number) {}
  turnOn() {}
  turnOff() {}
}
// Budujemy system odpowiedzialny za reaktor
class NuclearReactor {
  turnOn() {}
  turnOff() {}
}
// Budujemy fasadę, która łączy nasze podsystemy w uproszczony interfejs
class PowerPlantFacade {
  private cooling = new CoolingSystem();
  private reactor = new NuclearReactor();

  public turnOnSystems() {
    this.cooling.turnOn();
    this.cooling.setMaxTemperature(100);
    this.reactor.turnOn();
  }

  public turnOffSystems() {
    this.reactor.turnOff();
    this.cooling.turnOff();
  }
}
// Za pomocą klasy/fasady obsługujemy elektrownię
const powerPlant = new PowerPlantFacade();
powerPlant.turnOnSystems();
powerPlant.turnOffSystems();
