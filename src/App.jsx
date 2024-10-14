// // react-router-dom props
// import { RouterProvider } from "react-router-dom";

// // routes
// import router from "./routes/Routing";

// export default function App() {
//   return <RouterProvider router={router} />;
// }

// App.js
import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routing";
import LoadingScreen from "./components/ui/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the duration as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return <LoadingScreen />; // Show the loading screen while loading
  }

  return <RouterProvider router={router} />; // Render the RouterProvider with the router
}
