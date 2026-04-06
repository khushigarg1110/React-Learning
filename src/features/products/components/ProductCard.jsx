import "./ProductCard.css";


function ProductCard({product}){
    return(
     <div className="card">
      <h2>{product.name}</h2>
      <p className="price">₹{product.price}</p>
    <button>Add to Cart</button>
    </div>
  );
}


export default ProductCard