import { Outlet } from "react-router-dom";

// header
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
