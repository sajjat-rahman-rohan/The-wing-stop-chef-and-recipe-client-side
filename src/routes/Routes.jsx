import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AllChefCard from "../pages/Home/AllChefCrad/AllChefCard";
import Blog from "../pages/Blogs/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Chefs from "../pages/Chef_Recipe/Chefs/Chefs";
import Terms from "../pages/Shared/Terms/Terms";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chefrecipe/",
        element: <AllChefCard></AllChefCard>,
      },
      {
        path: "/chefrecipe/:id",
        element: (
          <PrivateRoute>
            <Chefs></Chefs>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a10-chef-recipe-hunter-server-sajjat-rahman-rohan.vercel.app/allData/${params.id}`
          ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
