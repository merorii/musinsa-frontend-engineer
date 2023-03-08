import React from "react";

import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";
import GlobalStyles from "assets/styles/GlobalStyles";
import { theme } from "assets/styles/theme";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
