
type Listener<EventType> = (ev: EventType) => void;

function createObserver<EventType>(): {
    subscribe: (listener: Listener<EventType>) =>() => void;
    publish: (event: EventType) => void;
    
} {
  const listeners: Listener<EventType>[] = [];

  return {
    subscribe: (listener: Listener<EventType>): () => void => {
      listeners.push(listener);
      return () => {
        const listenerIndex = listeners.indexOf(listener);
        listeners.splice(listenerIndex, 1);
      };
    },
    publish: (event: EventType) => {
      listeners.forEach((listener) => listener(event));
    },
  };
}

// interface BeforeSetEvent<T> {
//     value: T;
//     newValue: T;
// }

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

    static instance: InMemoryDatabase = new InMemoryDatabase();

    private constructor() {}

    public set(newValue: T): void {
      this.db[newValue.id] = newValue;
    }
    public get(id: string): T {
      return this.db[id];
    }
  }
  // const dB = new InMemoryDatabase();
  //   return dB;
  return InMemoryDatabase;
}

const pokemonDB = createDatabase<Pokemon>();

export { pokemonDB };
