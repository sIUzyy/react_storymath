// react-router-dom props
import { createBrowserRouter } from "react-router-dom";

// pages
import MainPage from "../pages/MainPage";

// header
import Layout from "../header/Layout";

// component
import Error404 from "../components/status/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);

export default router;
