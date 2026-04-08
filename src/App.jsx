import { useState } from "react";
import { useSelector } from "react-redux";
import Login from "./features/auth/components/Login";
import Signup from "./features/auth/components/Signup";
import ProductCard from "./features/products/components/ProductCard";
import useProducts from "./features/products/hooks/useProducts";
import Cart from "./features/cart/components/Cart";
import Navbar from "./features/auth/components/navbar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showCart, setShowCart] = useState(false);

  // ✅ Get auth from Redux
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  const { products, loading } = useProducts();

  // 🔹 If NOT logged in → show auth
  if (!isAuthenticated) {
    return (
      <div>
        {isLogin ? <Login /> : <Signup />}

        <p style={{ textAlign: "center" }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    );
  }

  // 🔹 After login → show app
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Navbar onCartClick={() => setShowCart(!showCart)} />

      <h1 style={{ textAlign: "center" }}>Product Listing</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
        }}
      >
        {/* 🛍️ Products */}
        <div style={{ flex: 3 }}>
          <div className="grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* 🛒 Cart */}
        <div style={{ flex: 1 }}>
          <Cart />
        </div>
      </div>

      {/* ✅ DevTools (optional but useful) */}
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;