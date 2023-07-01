import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../shared/components/Navbar";

export const Root = () => {
  const path = useLocation();
  
  return (
    <>
      <Navbar pathname={path.pathname} />
      <Outlet />
    </>
  );
};
