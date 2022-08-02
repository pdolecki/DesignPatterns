// Chcemy żeby nasza aplikacja udostępniała globalnie jedną instancję(tę samą) słownika.
// Tworzymy klasę słownik, która będzie tym singletonem
class DictionarySingleton {
  private static instance: DictionarySingleton;

  private constructor() {}

  // Następnie umożłiwiamy dostęp do tej instancji
  public static getInstance(): DictionarySingleton {
    if (!DictionarySingleton.instance) {
      DictionarySingleton.instance = new DictionarySingleton();
    }
    return DictionarySingleton.instance;
  }
}
// Korzystamy z naszej instancji "globalnie"
const singleton = DictionarySingleton.getInstance();
