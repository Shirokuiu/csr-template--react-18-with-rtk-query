import { api } from 'src/services/api';

const pokemonApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getPokemonByName: query<unknown, string>({
      query: (name: string) => `pokemon/${name}`,
    }),
    loadAllPokemons: query<unknown, void>({
      query: () => 'pokemon',
    }),
  }),
  overrideExisting: false,
});

export const { useGetPokemonByNameQuery, useLazyLoadAllPokemonsQuery } = pokemonApi;
