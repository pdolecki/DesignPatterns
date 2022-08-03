// Posiadamy dowolną kolekcję. Chcemy przeiterować po jej zawartości,
// niezależnie od tego, jaki ma ona typ(bez jej eksponowania)
interface IIterator {
  next(): any;
  hasNext(): boolean;
}
// Tworzymy główny Iterator, który umożliwi nam wykonanie zadania
class ConcreteIterator implements IIterator {
  private collection: any[] = [];
  private index: number = 0;

  constructor(collection: any[]) {
    this.collection = collection;
  }
  // Metoda do przejścia na następny element
  next(): any {
    const result = this.collection[this.index];
    this.index += 1;
    return result;
  }
  // Metoda sprawdzająca czy istnieje następny element
  hasNext(): boolean {
    return this.index < this.collection.length;
  }
}
// Następnie wykorzystujemy go, do iterowania po kolekcji np. typu String
class Strings {
  private collection: string[] = [];

  constructor(collection: string[]) {
    this.collection = collection;
  }

  createIterator(): IIterator {
    return new ConcreteIterator(this.collection);
  }
}
// Tworzymy taką kolekcję, wykorzystując tablicę i naszą klasę Strings,
// a następnie tworzymy z niej iterator w oparciu o główną klasę
const strArray = ["c", "o", "l", "l", "e", "c", "t", "i", "o", "n"];
const strings: Strings = new Strings(strArray);
const iter: ConcreteIterator = strings.createIterator() as ConcreteIterator;
// Iterujemy po kolekcji, wykorzystując go i wyświetlamy dane w konsoli
while (iter.hasNext()) {
  console.log(iter.next());
}
