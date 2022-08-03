// Firma logistyczna zajmuje się transportem lądowym oraz wodnym. Zależnie
// od rodzaju pojazdu, towar ładowany jest w innym jego segmencie
interface IVehicle {
  getLoadingArea(): string;
}
// Łódź transportuje towar pod pokładem(w ładowni)
class Boat implements IVehicle {
  getLoadingArea(): string {
    return "Loaded inside loading compartment";
  }
}
// Samochód transportuje towar w bagażniku(na pace)
class Car implements IVehicle {
  getLoadingArea(): string {
    return "Loaded inside trunk";
  }
}
// Niezdefiniowany typ pojazdu - nie produkowany
class NotDefinedVehicle implements IVehicle {
  getLoadingArea(): string {
    return "Invalid vehicle Type!";
  }
}
// Do organizacji działania wykorzystujemy fabrykę - zwracamy właściwy
// pojazd w zależności od przekazanego do fabryki typu
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
// Serwis do sprawdzania miejsca załądunku towaru(w pojeździe)
class VehicleService {
  getLoadingAreaByVehicle(vehicleType: string) {
    return VehicleFactory.getVehicleInstance(vehicleType).getLoadingArea();
  }
}
// Sprawdzamy miejsca załadunku(różne dla innych pojazdów)
console.log("BOAT: ", new VehicleService().getLoadingAreaByVehicle("Boat")); // BOAT: Loaded inside loading compartment
console.log("CAR: ", new VehicleService().getLoadingAreaByVehicle("Car")); // CAR: Loaded inside trunk
