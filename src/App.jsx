import { Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Poke from "./pages/Poke";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Dynamic Routing */}
        <Route path="/poke/:id" element={<Poke />} />
      </Route>
    </Routes>
  );
};

export default App;
