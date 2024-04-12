import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Gallery from "./components/Gallery/Gallery.jsx";
import Schedule from "./components/Schedule/Schedule.jsx";
import SchedulePage from "./components/SchedulePage/SchedulePage.jsx";
const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <div>Page Not Found 404</div> },
  { path: "/Gallery", element: <Gallery /> },
  { path: "/Schedule", element: <Schedule /> },

  { path: "/SchedulePage/:id", element: <SchedulePage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
