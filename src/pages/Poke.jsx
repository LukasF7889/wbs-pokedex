import { useParams, Link } from "react-router";
import { useSingleFetch } from "../hooks/useFetch";

const Poke = () => {
  const { id } = useParams();
  const { poke, load, error } = useSingleFetch(id);

  if (load) return <div>LOADING...</div>;
  if (error) return <div>OH NO! ERROR! {error}</div>;
  if (!poke) return <div>Pokemon not found...</div>;

  return (
    <>
      <Link
        to="/"
        className="cursor-pointer  border-solid outline-black outline-1 rounded-full px-6 py-3 mt-2 hover:bg-black hover:text-white"
      >
        Go back
      </Link>
      <div className="bg-white text-gray-800 shadow-2xl rounded-2xl p-4 min-w-[15vw] max-w-[50vw] mx-auto flex flex-col justify-center items-center text-center">
        <img className="min-w-xl" src={poke.sprites.front_default} />
        <p className="uppercase font-bold">{poke.name}</p>
        <p>Weight: {poke.weight}</p>
        <p>
          Type:{" "}
          {poke.types.map((e) => (
            <span className="rounded-full bg-amber-200 px-2 py-1">{`${e.type.name} `}</span>
          ))}
        </p>
      </div>
    </>
  );
};

export default Poke;
