import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../../Pages/Home-page/HomePage";
import ErrorPage from "../../Pages/Error/ErrorPage";
import LoginPage from "../../Auth/Login";
import Register from "../../Auth/Register";
import AddModelPage from "../../Pages/Models/AddModels";
import PrivateRoute from "../../Provider/PrivateRoute";
import AllModels from "../../Pages/Models/AllModels";
import ModelsDetails from "../../Pages/Models/ModelsDetails";
import UpdateModels from "../../Pages/Models/UpdateModels";
import MyModels from "../../Pages/Models/MyModels";
import MyPurchased from "../../Pages/Models/MyPurchased";
import Loader from "../../Pages/Home-page/Loading";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage></HomePage>,
          loader: () => fetch("http://localhost:3000/models"),
          hydrateFallback: <Loader></Loader>,
        },
        { path: "/login", element: <LoginPage></LoginPage> },
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
        { path: "/all_models", element: <AllModels></AllModels> },
        {
          path: "/model_details/:id",
          element: (
            <PrivateRoute>
              <ModelsDetails></ModelsDetails>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:3000/models/${params.id}`),
          hydrateFallback: <Loader></Loader>,
        },
        {
          path: "/update_model/:id",
          element: (
            <PrivateRoute>
              <UpdateModels></UpdateModels>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:3000/models/${params.id}`),
          handle: { hydrateFallback: <Loader></Loader> },
        },
        {
          path: "/my_models",
          element: (
            <PrivateRoute>
              <MyModels></MyModels>
            </PrivateRoute>
          ),
        },
        {
          path: "/my_purchased_models",
          element: (
            <PrivateRoute>
              <MyPurchased></MyPurchased>
            </PrivateRoute>
          ),
        },
      ],
    },
  ],
  {
    hydrateFallback: <Loader></Loader>,
  }
);

export default router;
