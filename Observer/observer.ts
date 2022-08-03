// Jedna osoba przedstawia swoje sztuczki przed zainteresowanymi.
// Do grona oglądających w każdej chwili można dołączyć, bądź
// przestać obserwować wystąpienie
class Performer {
  // WYSTĘPUJĄCY
  private observers: any[]; // publika

  constructor() {
    this.observers = [];
  }

  startWatching(observer) {
    this.observers.push(observer);
  }

  stopWatching(observer) {
    this.observers = this.observers.filter((obs) => observer !== obs);
  }

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
  // Jeżeli sztuczka jest nowa dla widza, reaguje brawami,
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
