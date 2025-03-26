import { useParams, Link } from "react-router";
import { useState, useEffect } from "react";
import { useSingleFetch } from "../hooks/useFetch";

const Poke = () => {
  const { id } = useParams();
  // Fetch a single pokemon via useSingleFetch
  const { poke, load, error } = useSingleFetch(id);
  // This will be used to handle pokemon animation
  const [playAnimation, setPlayAnimation] = useState(false);

  // useEffect to make sure this code will be run when the animation plays
  useEffect(() => {
    if (playAnimation) {
      //set Animation to false (=disable animation) after 500 ms
      const timer = setTimeout(() => {
        setPlayAnimation(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [playAnimation]);

  //load and error handling
  if (load) return <div>LOADING...</div>;
  if (error) return <div>OH NO! ERROR! {error}</div>;
  if (!poke) return <div>Pokemon not found...</div>;

  //get the sound url of the pokemon
  const sound = poke.cries.latest;

  //this function will be triggered when clicking on a pokemon and play the sound & start the animation
  const playAudio = (sound) => {
    new Audio(sound).play();
    setPlayAnimation(true);
  };

  return (
    <div className="mt-[5rem] mb-[5rem]">
      <Link
        to="/"
        className="cursor-pointer  border-solid outline-white outline-1 rounded-full px-6 py-3 mt-2 hover:bg-black hover:text-white"
      >
        Go back
      </Link>
      <div
        className={`bg-white text-gray-800 shadow-2xl rounded-2xl p-4 min-w-[15vw] max-w-[50vw] mx-auto flex flex-col justify-center items-center text-center lg:max-w-[40vw] 2xl:max-w-[20vw]`}
      >
        <img
          onClick={() => playAudio(sound)}
          // add class "Pokeshake" only as long as the animation runs
          className={`w-[25vw] ${playAnimation ? "pokeShake" : ""}`}
          src={poke.sprites.front_default}
        />
        <p className="uppercase font-bold text-2xl">{poke.name}</p>
        <p className="mt-2 mb-4">
          <span>{`Weight: ${poke.weight} | `}</span>
          <span>
            Type: {/* map over Pokemon types */}
            {poke.types.map((e, index) => (
              <span
                key={index}
                className="rounded-full bg-amber-200 px-3 py-1 mx-1 italic"
              >{`${e.type.name} `}</span>
            ))}
          </span>
        </p>
        <div className="collapse collapse-plus border-base-300 border bg-amber-50">
          <input type="checkbox" />
          <h3 className="collapse-title font-semibold  text-black">Stats</h3>
          <div className="collapse-content text-sm text-black">
            {poke.stats.map((stat, index) => (
              <div
                key={index}
                className="grid grid-cols-2 w-[100%] items-center gap-2"
              >
                <p className="text-left">{stat.stat.name}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{
                      // display stat bars, make sure bars don't exceed 100%
                      width: `${Math.min(100, (stat.base_stat / 255) * 100)}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poke;
