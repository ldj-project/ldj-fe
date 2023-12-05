import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
