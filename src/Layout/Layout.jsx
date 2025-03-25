import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline pb-4">Pokemon!!!!</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
