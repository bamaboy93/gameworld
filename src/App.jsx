import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./views/Layout";

const Home = lazy(() => import("./views/Home"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
