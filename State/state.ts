// Budujemy system druku - dokumenty są w stanie oczekiwania, a po ich
// zweryfikowaniu możemy je wydrukować
interface State {
  printout: Printout;
  verifyPrintout();
  printPrintout();
}
// Klasa definiująca nasz wydruk wraz ze stanami(również obecnym)
class Printout {
  currentState: State;
  pendingPrintoutState: State;
  verifiedPrintoutState: State;
  printedPrintoutState: State;

  constructor() {
    this.pendingPrintoutState = new PendingPrintoutState(this);
    this.verifiedPrintoutState = new VerifiedPrintoutState(this);
    this.printedPrintoutState = new PrintedPrintoutState(this);

    this.setState(this.pendingPrintoutState);
  }

  setState(state: State) {
    this.currentState = state;
  }

  getState(): State {
    return this.currentState;
  }
}
// Klasa odpowiedzialna za stan OCZEKIWANIE
class PendingPrintoutState implements State {
  printout: Printout;

  constructor(printout: Printout) {
    this.printout = printout;
  }

  verifyPrintout() {
    console.log("Verifying document...");
    this.printout.setState(this.printout.verifiedPrintoutState);
  }

  printPrintout() {
    console.log("Cannot print - document not verified...");
  }
}
// Klasa odpowiedzialna za stan WERYFIKOWANIE
class VerifiedPrintoutState implements State {
  printout: Printout;

  constructor(printout: Printout) {
    this.printout = printout;
  }

  verifyPrintout() {
    console.log("Cannot verify - already verified...");
  }

  printPrintout() {
    console.log("Printing document...");
    this.printout.setState(this.printout.printedPrintoutState);
  }
}
// Klasa odpowiedzialna za stan DRUKOWANIE
class PrintedPrintoutState implements State {
  printout: Printout;

  constructor(printout: Printout) {
    this.printout = printout;
  }

  verifyPrintout() {
    console.log("Cannot verify - already printed...");
  }

  printPrintout() {
    console.log("Cannot print - already printed...");
  }
}

let printout = new Printout();
// STAN OCZEKIWANIE
console.log("[Document State]: " + printout.getState().constructor.name);
printout.getState().printPrintout(); // Nie można wydrukować - nie zweryfikowano
printout.getState().verifyPrintout(); // Weryfikowanie dokumentu...
// STAN ZWERYFIKOWANO
console.log("[Document State]: " + printout.getState().constructor.name);
printout.getState().verifyPrintout(); // Dokument jest już zweryfikowany
printout.getState().printPrintout(); // Drukowanie dokumentu...
// STAN WYDRUKOWANO
console.log("[Document State]: " + printout.getState().constructor.name);
