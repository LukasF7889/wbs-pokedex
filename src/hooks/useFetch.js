import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoad(true);
        let pokemon = [];

        for (let i = 1; i < 10; i++) {
          const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
          const result = await fetch(url);
          if (!result.ok) throw new Error(result.status);
          const json = await result.json();

          // const resultArray = json.results.map((e) => ({
          //   name: e.name,
          //   url: e.url,
          // }));
          pokemon.push(json);
        }

        setData(pokemon);
        console.log(pokemon);
      } catch (error) {
        setError("Error: " + error);
      } finally {
        setLoad(false);
      }
    }

    fetchData();
  }, []);

  return { data, load, error };
};

const useSingleFetch = (id) => {
  const [poke, setPoke] = useState(null);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoad(true);
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const result = await fetch(url);
        if (!result.ok) throw new Error(`Fehler: ${result.status}`);
        const json = await result.json();
        setPoke(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoad(false);
      }
    };

    fetchPokemon();
  }, []);

  return { poke, load, error };
};

export { useFetch, useSingleFetch };
