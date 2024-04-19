//! Observer Pattern / Pub-Sub Pattern
/* The Observer Pattern in TypeScript is a behavioral design pattern that
 defines a one - to - many dependency between objects so that when one
 object changes state, all its dependents are notified and updated automatically. */

type Listener<EventType> = (ev: EventType) => void;

function createObserver<EventType>(): {
  subscribe: (listener: Listener<EventType>) => () => void;
  publish: (event: EventType) => void;
} {
  const listeners: Listener<EventType>[] = [];

  return {
    subscribe: (listener: Listener<EventType>): (() => void) => {
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

interface BeforeSetEvent<T> {
  value: T;
  newValue: T;
}

interface AfterSetEvent<T> {
  value: T;
}

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

  onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void;
  onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void;
}

function createDatabase<T extends BaseRecord>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};
    private beforeAddListeners = createObserver<BeforeSetEvent<T>>();
    private afterAddListeners = createObserver<AfterSetEvent<T>>();
    static instance: InMemoryDatabase = new InMemoryDatabase();

    private constructor() {}

    public set(newValue: T): void {
      this.beforeAddListeners.publish({
        value: this.db[newValue.id],
        newValue: newValue,
      });
      this.db[newValue.id] = newValue;
      this.afterAddListeners.publish({
        value: newValue,
      });
    }
    public get(id: string): T {
      return this.db[id];
    }
    onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void {
      return this.beforeAddListeners.subscribe(listener);
    }
    onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void {
      return this.afterAddListeners.subscribe(listener);
    }
  }
  // const dB = new InMemoryDatabase();
  //   return dB;
  return InMemoryDatabase;
}

const pokemonDB = createDatabase<Pokemon>();

export { pokemonDB };
