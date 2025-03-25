import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Pokemon!!!!</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
