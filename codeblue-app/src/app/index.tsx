import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./modules/Routes/Routes";

export function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
