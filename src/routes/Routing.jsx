// react-router-dom props
import { createBrowserRouter } from "react-router-dom";

// pages
import MainPage from "../pages/MainPage";

// header
import Layout from "../header/Layout";

// component
import Error404 from "../components/status/Error404";
import AboutUsPage from "../pages/subpages/AboutUsPage";
import Maintenance from "../components/status/UnderConstruction";
import TierPage from "../pages/subpages/TierPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/aboutus", element: <AboutUsPage /> },
      { path: "tier", element: <TierPage /> },
      { path: "/maintenance", element: <Maintenance /> },
      { path: "*", element: <Error404 /> },
    ],
  },
]);

export default router;
