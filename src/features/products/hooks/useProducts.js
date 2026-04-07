import { useState, useEffect } from "react";


function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect running...");

    // 1. Check cache
    const cachedProducts = localStorage.getItem("products");

    if (cachedProducts) {
      console.log("Using cached data");
      setProducts(JSON.parse(cachedProducts));
      setLoading(false);
    } else {
      console.log("Fetching data from API...");

      // simulate API call
      setTimeout(() => {
        const data = [
          { id: 1, name: "iPhone", price: 80000 },
          { id: 2, name: "Laptop", price: 60000 },
          { id: 3, name: "Headphones", price: 3000 },
          { id: 4, name: "Tablet", price: 20000 },
        ];
        

        console.log("Data fetched:", data);

        setProducts(data);

        // 2. Save to cache
        localStorage.setItem("products", JSON.stringify(data));

        setLoading(false);
      }, 1000);
    }
  }, []);

  return { products, loading };
}

export default useProducts;