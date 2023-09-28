import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Mainlayout from "../Layout/Mainlayout";
import Favorites from "../Pages/Favorites";
import Cart from "../Pages/Cart";
import Details from "../Components/Details/Details";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
        {
            path : '/',
            element: <Home></Home>,
            loader: () => fetch('/phones.json')
        },
        {
            path: '/favorites',
            element: <Favorites></Favorites>
        },
        {
            path: '/cart',
            element: <Cart></Cart>
        },
        {
            path: '/details/:id',
            element:<Details></Details>,
            loader:() => fetch('/phones.json')
        }
    ],
  },
]);

export default myRouter;
