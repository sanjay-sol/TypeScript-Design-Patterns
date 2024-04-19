//! Singleton Pattern -- most used

/* The Singleton Pattern in TypeScript is a creational design pattern that
 ensures a class has only one instance and provides a global point of
  access to that instance. */

interface Pokemon {
  id: string;
  attack: number;
  defense: number;
}

interface BaseRecord {
  id: string;
}

interface Database<T extends BaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;
}

function createDatabase<T extends BaseRecord>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};

    public set(newValue: T): void {
      this.db[newValue.id] = newValue;
    }
    public get(id: string): T {
      return this.db[id];
    }
  }
    const dB = new InMemoryDatabase();
  return dB;
}

const pokemonDB = createDatabase<Pokemon>();

export { pokemonDB };
