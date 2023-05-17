import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import './index.css'
// import 'tailwindcss/base.css';
// import 'tailwindcss/components.css';
// import 'tailwindcss/utilities.css';

import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
