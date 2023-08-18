import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {About,Bookings,ErrorPage,Events,Home,Menu,Place,} from "../pages";
import App from "../App";

// Definición de la estructura de ruta
interface RouteConfig {
  path: string;
  element: React.ReactNode;
  errorElement: React.ReactNode;
  children?: {
    path: string;
    element: React.ReactNode;
    label: string;
  }[];
}

const routerConfig: RouteConfig[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        label: "Home",
      },
      {
        path: "/about",
        element: <About />,
        label: "Nosotros",
      },
      {
        path: "/bookings",
        element: <Bookings />,
        label: "reservaciones",
      },
      {
        path: "/menu",
        element: <Menu />,
        label: "menu",
      },
      {
        path: "/events",
        element: <Events />,
        label: "eventos",
      },
      {
        path: "/place",
        element: <Place />,
        label: "lugar",
      },
    ],
  },
];

const router = createBrowserRouter(routerConfig);

export default router;
