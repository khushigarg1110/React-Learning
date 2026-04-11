import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/cartSlice";
import "./ProductCard.css";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const dispatch = useDispatch();


  const handleAddToCart= () => {dispatch(addToCart(product));
  toast.success("Item successfully added to cart!");};

  return (
    <div className="product-card">
      <h3 className="product-title">{product.title}</h3>
      <img src={product.thumbnail} alt={product.title} className = "product-image"/>

      <p className="product-price">₹{product.price}</p>

      <button
        className="add-btn"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;