import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import AllFoods from "../pages/AllFoods";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import FoodDetails from "../pages/FoodsDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Creditcard from "../pages/Creditcard.jsx";
import { ProtectedRoute } from "../components/ProtectedRoutes/ProtectedRoute.js";
import { ProtectedRouteLoged } from "../components/ProtectedRoutes/ProtectedRouteLoged";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />

      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <ProtectedRouteLoged>
            <Login />
          </ProtectedRouteLoged>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedRouteLoged>
            <Register />
          </ProtectedRouteLoged>
        }
      />
      <Route path="/Creditcard" element={<Creditcard />} />
    </Routes>
  );
};

export default Routers;
