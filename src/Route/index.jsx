import React from "react";
import { LandingPage } from "../Pages/LandingPage/LandingPageR";
import HomePage from "../Pages";

export const ROUTE = {
  path: "/",
  element: <HomePage />,
  children: [
    {
      path: "/",
      element: <LandingPage />,
    },
  ],
};
