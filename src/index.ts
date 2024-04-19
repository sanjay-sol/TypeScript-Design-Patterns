import { RecordHandler, loader } from "./loader";

interface Pokemon {
    id: string,
    attack: number,
    defense: number,
}

interface BaseRecord {
    id: string;
}

interface Database<T extends BaseRecord> {
    set(newValue: T): void;
    get(id: string): T;
}
class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
    private db: Record<string, T> = {};

    public set(newValue: T): void {
        this.db[newValue.id] = newValue;
    }
    public get(id: string): T {
        return this.db[id];
    }
}

const pokemonDB = new InMemoryDatabase<Pokemon>();

pokemonDB.set({ id: "Bulbasaur", attack: 50, defense: 50 });

const bulbasaur = pokemonDB.get("Bulbasaur");
console.log(bulbasaur);