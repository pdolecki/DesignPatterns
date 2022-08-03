// Chcemy żeby nasza aplikacja udostępniała jedną instancję słownika
// Tworzymy klasę słownik, która będzie tym singletonem
class DictionarySingleton {
  private static instance: DictionarySingleton;

  private constructor() {}

  // Następnie umożłiwiamy dostęp do tej instancji
  // (bez możliwości jego edycji)
  public static getInstance(): DictionarySingleton {
    if (!DictionarySingleton.instance) {
      DictionarySingleton.instance = new DictionarySingleton();
    }
    return DictionarySingleton.instance;
  }
}
// Korzystamy z naszej instancji "globalnie"
const dictionary = DictionarySingleton.getInstance();
