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