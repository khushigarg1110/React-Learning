import { useState } from "react";
import Login from "./features/auth/components/Login";
import Signup from "./features/auth/components/Signup";
import ProductCard from "./features/products/components/ProductCard";
import useProducts from "./features/products/hooks/useProducts";
import Cart from "./features/cart/components/Cart";
import Navbar from "./features/auth/components/navbar";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showCart, setShowCart] = useState(false); // ✅ NEW

  const { products, loading } = useProducts();

  // 🔹 If NOT logged in → show auth
  if (!isAuthenticated) {
    return (
      <div>
        {isLogin ? (
          <Login setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <Signup setIsAuthenticated={setIsAuthenticated} />
        )}

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

    <div style={{
      display: "flex",
      gap: "20px",
      padding: "20px"
    }}>
      
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
  </div>
);
}

export default App;