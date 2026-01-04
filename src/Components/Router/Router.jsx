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
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyPurchasedModels from "../../Pages/Models/MyPurchased";
import Profile from "../../Pages/Dashboard/Profile";
import Contact from "../../Pages/Contact/Contact";
import About from "../../Pages/About/About";
import Analytics from "../../Pages/Dashboard/Analytics";

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
          loader: () =>
            fetch("https://vento-ai-management-server.vercel.app/models"),
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
        { path: "/contact", element: <Contact></Contact> },
        { path: "/about", element: <About></About> },
        {
          path: "/model_details/:id",
          element: (
            <PrivateRoute>
              <ModelsDetails></ModelsDetails>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://vento-ai-management-server.vercel.app/models/${params.id}`
            ),
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
            fetch(
              `https://vento-ai-management-server.vercel.app/models/${params.id}`
            ),
          handle: { hydrateFallback: <Loader></Loader> },
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <Profile></Profile>
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "profile",
          element: (
            <PrivateRoute>
              <Profile></Profile>
            </PrivateRoute>
          ),
        },
        {
          path: "my_purchased_models_dashboard",
          element: (
            <PrivateRoute>
              <MyPurchasedModels></MyPurchasedModels>
            </PrivateRoute>
          ),
        },
        {
          path: "my_models_dashboard",
          element: (
            <PrivateRoute>
              <MyModels></MyModels>
            </PrivateRoute>
          ),
        },
        {
          path: "add_models_dashboard",
          element: (
            <PrivateRoute>
              <AddModelPage></AddModelPage>
            </PrivateRoute>
          ),
        },
        {
          index: true,
          path: "/dashboard",
          element: (
            <PrivateRoute>
              <Analytics />
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
