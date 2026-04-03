import ProductCard from "./components/ProductCard/ProductCard"


function App(){
  const products = [
    { id: 1, name: "iPhone", price: 80000 },
    { id: 2, name: "Laptop", price: 60000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Tablet", price: 20000 },
  ];
  return(
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

export default App