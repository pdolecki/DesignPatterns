// Chcemy uzyskać naładowaną baterię
class Battery {
  public makeBattery() {
    console.log("Making a battery...");
  }
}
// Tworzymy klasę(fasadę), która spełni nasze wymagania
// i wyabstrahuje proces z perspektywy "użytkownika"
class PowerPlantFacade {
  constructor(private battery: Battery) {}

  public makeBattery() {
    this.battery.makeBattery();
    this.gatherEnergy();
    this.createBattery();
    this.loadBattery();
  }

  private gatherEnergy() {
    console.log("Gathering energy...");
  }

  private createBattery() {
    console.log("Creating battery...");
  }

  private loadBattery() {
    console.log("Loading battery...");
  }
}
// I wreszcie tworzymy naszą baterię
const battery = new PowerPlantFacade(new Battery());
battery.makeBattery();
