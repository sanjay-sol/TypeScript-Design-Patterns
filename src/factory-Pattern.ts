//! Factory Pattern

/* The Factory Pattern in TypeScript is a creational design pattern that
  provides an interface  for creating objects in a superclass, but allows 
 subclasses to alter the type of objects that will be created.

 It's useful when you have multiple classes that implement a common interface or extend 
 a common superclass, and you want to delegate the responsibility of object creation to subclasses.
*/

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

function createDatabase<T extends BaseRecord>(){
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};

    public set(newValue: T): void {
      this.db[newValue.id] = newValue;
    }
    public get(id: string): T {
      return this.db[id];
    }
  }
    return InMemoryDatabase;
}

const PokemonDB = createDatabase<Pokemon>();

const pokemonDB = new PokemonDB();

export {  pokemonDB };
