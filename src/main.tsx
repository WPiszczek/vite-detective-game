import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { theme } from "./features/theme";
import { App } from "./views";
import "./index.css";
import { GameProvider } from "./features/game/context";
import { SearchProvider } from "./features/search/context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GameProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </GameProvider>
    </ThemeProvider>
  </React.StrictMode>
);
