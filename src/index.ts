// ! Singleton Pattern
// import { pokemonDB } from "./singleton-pattern";

// pokemonDB.instance.set({
//     id: "Pikachu",
//     attack: 55,
//     defense: 40
// });

// console.log(pokemonDB.instance.get("Pikachu"));
// console.log(pokemonDB.instance.get("Bulbasaur"));

// ! Observer Pattern or PubSub Pattern

// import { pokemonDB } from "./pubSub-Pattern";

// const unsubscribe = pokemonDB.instance.onAfterAdd(({ value }) => {
//   console.log(value);
// });

// pokemonDB.instance.set({
//   id: "Pikachu",
//   attack: 55,
//   defense: 40,
// });

// unsubscribe();

// pokemonDB.instance.set({
//   id: "Bulbasaur",
//   attack: 49,
//   defense: 49,
// });


//! Visitor Pattern

import { pokemonDB } from "./visitor-Pattern";

pokemonDB.instance.set({
  id: "Pikachu",
  attack: 55,
  defense: 40,
});

pokemonDB.instance.set({
  id: "Bulbasaur",
  attack: 49,
  defense: 49,
});

pokemonDB.instance.visit((item) => {
  console.log(item);
});


//! Strategy Pattern

// import { pokemonDB } from "./strategy-Pattern";

// pokemonDB.instance.set({
//   id: "Pikachu",
//   attack: 55,
//   defense: 40,
// });

// pokemonDB.instance.set({
//   id: "Bulbasaur",
//   attack: 49,
//   defense: 49,
// });

// const bestDefender = pokemonDB.instance.selectBest((item) => item.defense);
// console.log(bestDefender);
// const bestAttacker = pokemonDB.instance.selectBest((item) => item.attack);
// console.log(bestAttacker);