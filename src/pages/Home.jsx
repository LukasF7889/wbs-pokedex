import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router";

const Home = () => {
  const { data, load, error } = useFetch();
  if (load) return <div>Loading...</div>;
  if (error) return <div>Error! {error}</div>;

  return (
    <>
      <div className="flex flex-wrap gap-5">
        {data.map((e, index) => (
          <div
            className="bg-white text-gray-800 shadow-2xl rounded-2xl p-4 min-w-[15vw] flex flex-col justify-center text-center"
            key={index}
          >
            <img src={e.sprites.front_default}></img>
            <p className="font-bold uppercase">{e.name}</p>
            <Link
              to={`/poke/${e.id}`}
              className="cursor-pointer  border-solid outline-black outline-1 rounded-full px-6 py-3 mt-2 hover:bg-black hover:text-white"
            >
              Select
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
