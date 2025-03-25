import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Poke from "./pages/Poke";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/poke/:id" element={<Poke />} />
      </Route>
    </Routes>
  );
};

export default App;
