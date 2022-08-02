// Firma logistyczna zajmuje się transportem lądowym oraz wodnym
// W zależności od rodzaju pojazdu, towar jest ładowany w innym segmencie
interface IVehicle {
  getLoadingArea(): string;
}

class Boat implements IVehicle {
  getLoadingArea(): string {
    return "Loaded inside loading compartment";
  }
}

class Car implements IVehicle {
  getLoadingArea(): string {
    return "Loaded inside trunk";
  }
}

class NotDefinedVehicle implements IVehicle {
  getLoadingArea(): string {
    return "Invalid vehicle Type!";
  }
}
// Do organizacji działania wykorzystujemy fabrykę - zwracamy pojazd w zależności od wskazanego(i prekazanego do fabryki) typu
class VehicleFactory {
  static getVehicleInstance(vehicleType: string): IVehicle {
    switch (vehicleType) {
      case "Boat":
        return new Boat();
      case "Car":
        return new Car();
      default:
        return new NotDefinedVehicle();
    }
  }
}
// Wykorzystujemy serwis, żeby uzyskać informację, gdzie w pojeździe znajduje się towar(załadunek)
class VehicleService {
  getLoadingAreaByVehicle(vehicleType: string) {
    return VehicleFactory.getVehicleInstance(vehicleType).getLoadingArea();
  }
}
// Sprawdzamy, że w zależności od typu - miejsce załadunku jest różne
console.log("BOAT: ", new VehicleService().getLoadingAreaByVehicle("Boat")); // BOAT: Loaded inside loading compartment
console.log("CAR: ", new VehicleService().getLoadingAreaByVehicle("Car")); // CAR: Loaded inside trunk
