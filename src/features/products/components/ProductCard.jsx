import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/cartSlice";
import "./ProductCard.css";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      <h3 className="product-title">{product.name}</h3>

      <p className="product-price">₹{product.price}</p>

      <button
        className="add-btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;