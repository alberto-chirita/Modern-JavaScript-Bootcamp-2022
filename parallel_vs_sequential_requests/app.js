// SEQUENTIAL REQUESTS!
// async function get3Pokemon() {
//   const pokemon1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const pokemon2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const pokemon3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(pokemon1.data.name);
//   console.log(pokemon2.data.name);
//   console.log(pokemon3.data.name);
// }

// PARALLEL REQUESTS!
async function get3Pokemon() {
  const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const results = await Promise.all([promise1, promise2, promise3]);
  printPokemon(results);
}

function printPokemon(results) {
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}

get3Pokemon();

// function changeBodyColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// }

// async function lightShow() {
//   await changeBodyColor("teal", 1000);
//   await changeBodyColor("pink", 1000);
//   await changeBodyColor("indigo", 1000);
//   await changeBodyColor("violet", 1000);
// }

// async function lightShow() {
//   const p1 = changeBodyColor("teal", 1000);
//   const p2 = changeBodyColor("pink", 1000);
//   const p3 = changeBodyColor("indigo", 1000);
//   const p4 = changeBodyColor("violet", 1000);
//   await p1;
//   await p2;
//   await p3;
//   await p4;
// }

// lightShow();
