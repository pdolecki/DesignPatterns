// Wyobraźmy sobie magiczne przedstawienie z otwartą publiką(w każdej chwili
// można dołączyć, bądź zrezygnować ze spektaklu)
class Performer {
  // WYSTĘPUJĄCY - obserwowany
  private observers: any[]; // PUBLIKA - obserwujący

  constructor() {
    this.observers = [];
  }
  // Metoda odpowiedzialna za zaczęcie oglądania
  startWatching(observer) {
    this.observers.push(observer);
  }
  // Metoda odpowiedzialna za przerwanie oglądania
  stopWatching(observer) {
    this.observers = this.observers.filter((obs) => observer !== obs);
  }
  // Metoda odpowiedzialna za wykonanie sztuczki
  performTrick(trick: string) {
    this.observers.forEach((obs) => {
      obs.update(trick);
    });
  }
}

class Spectator {
  // OGLĄDAJĄCY
  tricksSeen: string[]; // tablica już widzianych sztuczek

  constructor() {
    this.tricksSeen = [];
  }

  applaud() {
    console.log("BRAVO!!!");
  }
  // Jeżeli sztuczka jest nowa dla widza - reaguje brawami,
  // w przeciwnym wypadku - zdenerwowaną ekspresją twarzy
  update(trick: string) {
    if (!this.tricksSeen.includes(trick)) {
      this.tricksSeen.push(trick);
      this.applaud();
    } else {
      console.log("angry expression");
    }
  }
}

const performer = new Performer();
const spectator1 = new Spectator();
// Osoba zaczyna oglądać występ
performer.startWatching(spectator1);
// Występujący pokazuje sztuczkę karcianą
performer.performTrick("CARD"); // BRAVO!!!
// Występujący pokazuje tę samą sztuczkę,
performer.performTrick("CARD"); // 'angry expression'
