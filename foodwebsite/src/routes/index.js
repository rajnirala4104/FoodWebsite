import { createBrowserRouter } from "react-router-dom";
import { FoodCategory, FoodSingleCategory, Home, OrderPage, Root } from "../pages";

export const _ROUTERS = createBrowserRouter([{
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/food",
        element: <FoodCategory />,
      },
      {
        path: "/food/:categoryName",
        element: <FoodSingleCategory/>,
      },
      {
        path: "/food/:categoryName/:orderMeal",
        element: <OrderPage/>
      },
    ],
  },
]);
