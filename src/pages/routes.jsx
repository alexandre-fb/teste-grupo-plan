import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
