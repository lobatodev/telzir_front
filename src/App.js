import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Load from "./pages/splashScreen";
const Routes = lazy(() => import("./routes"));

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Suspense fallback={<Load />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
