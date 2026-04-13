import { Routes, Route, Navigate } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import ProductsPage from "./pages/ProductsPage";
// import CartPage from "./pages/CartPage";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import React, { Suspense } from "react";

const ProductsPage = React.lazy(() => import("./pages/ProductsPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const SignupPage = React.lazy(() => import("./pages/SignupPage"));
const Navbar = React.lazy(() => import("./features/auth/components/navbar"));



// Protected Route Component
function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />
    <Suspense fallback={null}>
      <Navbar />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>

    
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <ProductsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        }
      />

      {/* default route */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
    </Suspense>
    </>
  );
}

export default App;