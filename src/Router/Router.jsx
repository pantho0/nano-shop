import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Mainlayout from "../Layout/Mainlayout";
import Favorites from "../Pages/Favorites";
import Cart from "../Pages/Cart";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
        {
            path : '/',
            element: <Home></Home>
        },
        {
            path: '/favorites',
            element: <Favorites></Favorites>
        },
        {
            path: '/cart',
            element: <Cart></Cart>
        }
    ],
  },
]);

export default myRouter;
