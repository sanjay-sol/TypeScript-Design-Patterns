import { pokemonDB } from "./factory-Pattern";

pokemonDB.set({
    id: "Pikachu",
    attack: 55,
    defense: 40
});

console.log(pokemonDB.get("Pikachu"));
console.log(pokemonDB.get("Bulbasaur"));

