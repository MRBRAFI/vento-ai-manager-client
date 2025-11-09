import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import HomePage from "./Pages/Home-page/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  </StrictMode>
);
