import { Route, Routes } from "react-router-dom";
import Layout from "../layout";
import HomePage from "../pages/home";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
