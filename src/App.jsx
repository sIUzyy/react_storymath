// react-router-dom props
import { RouterProvider } from "react-router-dom";

// routes
import router from "./routes/Routing";

export default function App() {
  return <RouterProvider router={router} />;
}
