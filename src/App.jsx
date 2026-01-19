import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Login from "./pages/login/Login";
import Layout from "./components/layout/Layout";
import NewsPage from "./pages/news/NewsPage";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="homepage" element={<HomePage/>}/>
          <Route path="about" element={<About />} />
          <Route path="productdetail" element={<ProductDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="newspage" element={<NewsPage/>}/>
          <Route path="product/:id" element={<ProductDetail/>}/>
        </Route>
      </Routes>
  );
}

export default App;
