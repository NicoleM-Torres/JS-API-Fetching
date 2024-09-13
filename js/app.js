// URL WE ARE GETTING DATA FROM:
const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/pikachu";

// FECTH DATA FROM POKEMON API
fetch(pokemonUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // PARSE JSON FROM RESPONSE
  })
  .then((data) => {
    //LOG DATA TO CONSOLE
    console.log("Pokémon data:", data);

    // DISPLAY POKEMON INFO
    console.log("Name:", data.name);
    console.log("Height:", data.height);
    console.log("Weight:", data.weight);
    console.log(
      "Abilities:",
      data.abilities.map((ability) => ability.ability.name).join(", ")
    );
    // ACCESS MOVES AND STORES INTO CONST VAR
    const moves = data.moves;

    //Checks lengh, if more than 25 objs then displays the 25th
    if (moves.length >= 25) {
      // LOG THE 25TH INDEX
      console.log("Move [25th] index:", moves[24].move.name);
    } else {
      console.log("This Pokémon has less than 25 moves.");
    }
    // GET POKEMON PICTURE
    const defaultPictureUrl =
      data.sprites.other["official-artwork"].front_default;

    //CONSOLE LOG THE PICTURE
    console.log("Pokemon picture URL:", defaultPictureUrl);
  })

  .catch((error) => {
    // LOG ERRORS
    console.error("There was an error with the fetch operation:", error);
  });
