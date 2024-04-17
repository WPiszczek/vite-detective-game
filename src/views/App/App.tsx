import { FC } from "react";

import { Game, Main } from "..";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/game" element={<Game />} />
      <Route path="*" element={<Main />} />
    </Routes>
  </BrowserRouter>
);

export default App;
