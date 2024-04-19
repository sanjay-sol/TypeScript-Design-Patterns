import { pokemonDB } from "./singleton-pattern";

pokemonDB.set({
    id: "Pikachu",
    attack: 55,
    defense: 40
});

console.log(pokemonDB.get("Pikachu"));
console.log(pokemonDB.get("Bulbasaur"));

