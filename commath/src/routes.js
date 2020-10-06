import React from "react";
// import { Navigate } from 'react-router-dom';
import Main from "./views/main";
import B2s from "./views/b2s";
import Elimination from "./views/elimination";

const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "commath-pj",
    element: <Main />,
  },
  {
    path: "b2s",
    element: <B2s />,
  },
  {
    path: "elimination",
    element: <Elimination />,
  },
];

export default routes;
