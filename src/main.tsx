import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import { ErrorPage } from "./pages";
import Contact from "./routes/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
