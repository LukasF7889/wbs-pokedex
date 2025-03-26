import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router";

const Home = () => {
  //run useFetch to fetch data
  const { data, load, error } = useFetch();
  if (load) return <div>Loading...</div>;
  if (error) return <div>Error! {error}</div>;

  return (
    <>
      <div className="mx-auto grid grid-cols-1 max-w-[90vw]  md:grid-cols-4 lg:grid-cols-5 gap-4 mt-[5rem] mb-[5rem]">
        {/* Map over the data and display as cards */}
        {data.map((e, index) => (
          <div
            className="bg-white text-gray-800 shadow-2xl rounded-2xl p-4 min-w-[15vw] flex flex-col justify-center text-center"
            key={index}
          >
            <img src={e.sprites.front_default}></img>
            <p className="font-bold uppercase">{e.name}</p>
            {/* Dynamic routing link to pokemon detail page, using the ID */}
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
