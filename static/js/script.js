const pokemonName = document.querySelector(".pokemon_name");
const PokemonId = document.querySelector(".pokemon_number");
const PokemonSprite = document.querySelector(".pokemon_image");

const form = document.querySelector(".form");
const input = document.querySelector(".input_search");

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await APIResponse.json();
  return data;
};

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);
  pokemonName.innerHTML = data.name;
  PokemonId.innerHTML = data.id;
  PokemonSprite.src =
    data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ];
};
form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});
console.log(input.value);
