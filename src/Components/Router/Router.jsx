import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../../Pages/Home-page/HomePage";
import ErrorPage from "../../Pages/Error/ErrorPage";
import LoginPage from "../../Auth/Login";
import Register from "../../Auth/Register";
import AddModelPage from "../../Pages/Models/AddModels";
import PrivateRoute from "../../Provider/PrivateRoute";
import AllModels from "../../Pages/Models/AllModels";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        loader: () => fetch("http://localhost:3000/models"),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add_models",
        element: (
          <PrivateRoute>
            <AddModelPage></AddModelPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/all_models",
        element: <AllModels></AllModels>,
      },
    ],
  },
]);

export default router;
