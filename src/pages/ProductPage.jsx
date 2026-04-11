import useProducts from "../features/products/hooks/useProducts";
import ProductCard from "../features/products/components/ProductCard";
import Cart from "../features/cart/components/Cart";
import Navbar from "../features/auth/components/navbar";
import { useEffect } from "react";
import { toast } from "react-toastify";

function ProductsPage() {
  const { products, loading, error } = useProducts();

  useEffect(() => {
    if(error){
      toast.error(error.message);
    }
  },[error])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <div>
      <Navbar />

      <h1 style={{ textAlign: "center" }}>Product Listing</h1>

      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        {/* Products */}
        <div style={{ flex: 3 }}>
          <div className="grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;