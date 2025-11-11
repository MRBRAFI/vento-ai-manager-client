import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../../Pages/Home-page/HomePage";
import ErrorPage from "../../Pages/Error/ErrorPage";
import LoginPage from "../../Auth/Login";
import Register from "../../Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        loader: () => fetch("http://localhost:3000/latest_models"),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
