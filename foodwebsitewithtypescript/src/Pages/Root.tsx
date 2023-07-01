import { Outlet } from "react-router-dom";
import { Navgbar } from "../shared/components/Navgbar";

export const Root = () => {
  return (
    <>
      <Navgbar/>
      <Outlet />
    </>
  );
};
