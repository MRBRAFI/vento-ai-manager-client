import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import HomePage from "../../Pages/Home-page/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
    ],
  },
]);

export default router;
