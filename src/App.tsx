import React from "react";
import AppRoutes from "./routes";
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <AppRoutes />
  </>
);

export default App;
