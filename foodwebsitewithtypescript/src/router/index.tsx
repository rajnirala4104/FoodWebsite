import { createBrowserRouter } from "react-router-dom";
import { FoodCategories, Foods, Home, Root } from "../Pages";

export const _ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/foods",
        element: <Foods/>
      },
      {
        path: "/foodcategories",
        element: <FoodCategories />,
      },
    ],
  },
]);
