import { useState } from "react";
import Login from "./features/auth/components/Login";
import Signup from "./features/auth/components/Signup";
import ProductCard from "./features/products/components/ProductCard";
import useProducts from "./features/products/hooks/useProducts";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { products, loading } = useProducts();

  // 🔹 If logged in → show products
  if (isAuthenticated) {
    if (loading) return <p>Loading...</p>;

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Product Listing</h1>

        <div className="container">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }

  // 🔹 If NOT logged in → show auth forms
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

export default App;