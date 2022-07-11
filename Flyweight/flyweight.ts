// Tworzymy klasę flyweight Ticket, której zadaniem jest
// współdzielenie danych dotyczących mandatów za złe praktyki
class Ticket {
  constructor(public charge: string, public fine: number) {}
}
// Tworzymy klasę TicketFactory, do tworzenia obiektów Ticket
class TicketFactory {
  private tickets: Ticket[];

  getTicket(charge: string) {
    return this.tickets.find((ticket) => ticket.charge === charge);
  }

  createTicket(charge: string, fine: number) {
    let ticket = this.getTicket(charge);

    if (!ticket) {
      const newTicket = new Ticket(charge, fine);
      this.tickets.push(newTicket);
      return newTicket;
    }

    return ticket;
  }
}
// Tworzymy instancję naszej fabryki
const factory = new TicketFactory();
// Tworzymy pierwsze mandaty za złe praktyki
const frontendTS = factory.createTicket("using 'any' everywhere", 150);
const backendTS = factory.createTicket("using 'any' everywhere", 150);
// Sprawdzamy czy referencja dotyczy tego samego obiektu
console.log(frontendTS === backendTS); // true
